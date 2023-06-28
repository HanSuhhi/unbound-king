import { HttpException, HttpStatus, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { faker } from "@faker-js/faker";
import { Cache } from "cache-manager";
import { JwtService } from "@nestjs/jwt";
import type { UserDocument } from "../users/schemas/user.schemas";
import type { LoginDto } from "./dtos/login.dto";
import type { LoginVo } from "./vos/login.vo";
import { useMinute } from "#/composables/time/ms";
import { TrpcRouter } from "@/trpc/trpc.router";
import { i18nLangModel } from "#/composables/i18n";
import { convertEmailToPrefix } from "@/composables/string/email";

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
  public async register({ email, code }: LoginDto): Promise<LoginVo> {
    await this.validateCode(email)(code);
    let user = await this.trpcRouter.caller.user.findOneByEmail(email);

    if (!user) {
      const name = convertEmailToPrefix(email);
      user = await this.trpcRouter.caller.user.createDefaultUserByEmail({
        email,
        name
      });
    }

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
  public async login({ email, code }: LoginDto): Promise<LoginVo> {
    await this.validateCode(email)(code);

    const user = await this.trpcRouter.caller.user.findOneByEmail(email);
    if (!user) {
      this.cacheManager.set(email, code, useMinute(5));
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
  private async coreLogin({ _id, email, roles, name }: UserDocument): Promise<LoginVo> {
    const payload = { sub: _id, email, roles };
    return {
      access_token: await this.jwtService.signAsync(payload),
      name,
      roles
    };
  }

  /**
   * Validates the input code against the cached code using the provided email.
   *
   * @param {string} email - The email of the user to validate the code for.
   * @returns {(code: number) => Promise<number>} - A function that takes in a code and returns a promise resolving to a number indicating if the input code is valid or not.
   */
  private validateCode(email: string): (code: number) => Promise<number> {
    /**
     * A closure function that takes in a code and validates it against the cached code for the email.
     *
     * @param {number} code - The input code to validate against the cached code.
     * @returns {Promise<number>} - A promise resolving to a number indicating the cached code.
     */
    return async (code: number): Promise<number> => {
      const cachedCode = await this.cacheManager.get<number>(email);
      if (cachedCode !== code) throw new UnauthorizedException(i18nLangModel.validate.authenticationCode);
      this.cacheManager.del(email);
      return cachedCode;
    };
  }
}
