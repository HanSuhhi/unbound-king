import { HttpException, HttpStatus, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { faker } from "@faker-js/faker";
import { Cache } from "cache-manager";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import type { UserDocument } from "../users/schemas/user.schemas";
import type { LoginDto } from "./dtos/login.dto";
import type { LoginResponseDto } from "./dtos/login-response.dto";
import { invalid } from "@/composables/exceptions/Invalid";
import { useMinute } from "#/composables/time/ms";
import { Authority } from "#/composables/constant/response";

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly userService: UsersService,
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
   * @returns {LoginResponseDto} The created user.
   */
  public async register(registerDto: LoginDto): Promise<LoginResponseDto> {
    await this.validateCode(registerDto.email)(registerDto.code);
    let user = await this.userService.findOneByEmail(registerDto.email);

    if (!user) {
      user = await this.userService.create({
        email: registerDto.email
      }) as UserDocument;
    }

    return this.coreLogin(user);
  }

  /**
   * Validate the login information and generate a JWT token.
   * @async
   * @param {LoginDto} loginDto - The DTO containing the login information (email and code).
   * @throws {UnauthorizedException} If the provided code is not right.
   * @throws {HttpException} If the provided email is not registered.
   * @returns {LoginResponseDto} An object containing the generated JWT token.
   */
  public async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    await this.validateCode(loginDto.email)(loginDto.code);

    const user = await this.userService.findOneByEmail(loginDto.email);
    if (!user) throw new HttpException("user not found", HttpStatus.ACCEPTED);

    return this.coreLogin(user);
  }

  /**
   * Asynchronous method to authenticate user via email
   * @async
   * @param {UserDocument} user - registed user
   * @returns {LoginResponseDto} An object containing the authentication token
   */
  private async coreLogin(user: UserDocument): Promise<LoginResponseDto> {
    const payload = { sub: user._id, email: user.email };
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
     * @returns {Promise<boolean>} - A promise resolving to a boolean indicating if the input code is valid or not.
     */
    return async (code: number): Promise<void> => {
      const cachedCode = await this.cacheManager.get<number>(email);
      this.cacheManager.del(email);
      if (cachedCode !== code) throw new UnauthorizedException(invalid("authentication code"));
    };
  }
}
