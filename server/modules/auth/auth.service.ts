import { ForbiddenException, Inject, Injectable } from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { faker } from "@faker-js/faker";
import { Cache } from "cache-manager";
import { UsersService } from "../users/users.service";
import { invalid } from "../../composables/exceptions/Invalid";
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

  public async register(registerDto: LoginDto) {
    const cachedCode = await this.cacheManager.get<number>(registerDto.email);
    if (cachedCode !== registerDto.code) throw new ForbiddenException(invalid("authentication code"));
    this.cacheManager.del(registerDto.email);

    const user = await this.userService.findOneByEmail(registerDto.email);
    if (user) throw new ForbiddenException("User already exists");

    return this.userService.create({
      email: registerDto.email
    });
  }
}
