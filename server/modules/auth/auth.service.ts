import { HttpException, HttpStatus, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { faker } from "@faker-js/faker";
import { Cache } from "cache-manager";
import { JwtService } from "@nestjs/jwt";
import type { UserDocument } from "../users/schemas/user.schemas";
import type { LoginDto } from "./dtos/login.dto";
import type { LoginVo } from "./vos/login.vo";
import { useMinute } from "#/composables/time/ms";
import { Authority } from "#/composables/constant/response";
import { TrpcRouter } from "@/trpc/trpc.router";
import { i18nLangModel } from "#/composables/i18n";

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly trpcRouter: TrpcRouter,
    private readonly jwtService: JwtService
  ) {}

  /**
   * Generates a random 6-digit email authentication code.
   * @returns {number} A promise that resolves with a 6-digit authentication code.
   */
  public createEmailAuthCode(email: string): number {
    const code = faker.number.int({ min: 100000, max: 999999 });
    this.cacheManager.set(email, code, useMinute(5));
    return code;
  }

  /**
   * Registers a new user.
   * @param {LoginDto} registerDto The registration info of user.
   * @throws {UnauthorizedException} If the provided code is not right.
   * @returns {LoginVo} The created user.
   */
  public async register(registerDto: LoginDto): Promise<LoginVo> {
    await this.validateCode(registerDto.email)(registerDto.code);
    let user = await this.trpcRouter.caller.user.findOneByEmail(registerDto.email);

    if (!user) user = await this.trpcRouter.caller.user.createDefaultUserByEmail(registerDto.email);

    return this.coreLogin(user);
  }

  /**
   * Validate the login information and generate a JWT token.
   * @async
   * @param {LoginDto} loginDto - The DTO containing the login information (email and code).
   * @throws {UnauthorizedException} If the provided code is not right.
   * @throws {HttpException} If the provided email is not registered.
   * @returns {LoginVo} An object containing the generated JWT token.
   */
  public async login(loginDto: LoginDto): Promise<LoginVo> {
    const code = await this.validateCode(loginDto.email)(loginDto.code);

    const user = await this.trpcRouter.caller.user.findOneByEmail(loginDto.email);
    if (!user) {
      this.cacheManager.set(loginDto.email, code, useMinute(5));
      throw new HttpException("user not found", HttpStatus.ACCEPTED);
    }

    return this.coreLogin(user);
  }

  /**
   * Asynchronous method to authenticate user via email
   * @async
   * @param {UserDocument} user - registed user
   * @returns {LoginVo} An object containing the authentication token
   */
  private async coreLogin({ _id, email, roles }: UserDocument): Promise<LoginVo> {
    const payload = { sub: _id, email, roles };
    return {
      [Authority.TOKEN]: await this.jwtService.signAsync(payload)
    };
  }

  /**
   * Validates the input code against the cached code using the provided email.
   *
   * @param {string} email - The email of the user to validate the code for.
   * @returns {Promise<(code: number) => Promise<boolean>>} - A function that takes in a code and returns a promise resolving to a boolean indicating if the input code is valid or not.
   */
  private validateCode(email: string) {
    /**
     * A closure function that takes in a code and validates it against the cached code for the email.
     *
     * @param {number} code - The input code to validate against the cached code.
     * @returns {Promise<number>} - A promise resolving to a number indicating the cached code.
     */
    return async (code: number): Promise<number> => {
      const cachedCode = await this.cacheManager.get<number>(email);
      this.cacheManager.del(email);
      if (cachedCode !== code) throw new UnauthorizedException(i18nLangModel.validate.authenticationCode);
      return cachedCode;
    };
  }
}
