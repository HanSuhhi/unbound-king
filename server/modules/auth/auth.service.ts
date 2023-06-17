import { ForbiddenException, Inject, Injectable } from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { faker } from "@faker-js/faker";
import { Cache } from "cache-manager";
import { UsersService } from "../users/users.service";
import { invalid } from "../../composables/exceptions/Invalid";
import type { User } from "../users/schemas/user.schemas";
import type { LoginDto } from "./dtos/login.dto";
import { useMinute } from "#/composables/time/ms";

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly userService: UsersService
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
   * @returns {User} The created user.
   */
  public async register(registerDto: LoginDto): Promise<User> {
    await this.validateCode(registerDto.email)(registerDto.code);
    await this.userService.validateUserByEmail(registerDto.email, { throwIfExists: true });

    return this.userService.create({
      email: registerDto.email
    });
  }

  public async login(loginDto: LoginDto) {

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
      if (cachedCode !== code) throw new ForbiddenException(invalid("authentication code"));
    };
  }
}
