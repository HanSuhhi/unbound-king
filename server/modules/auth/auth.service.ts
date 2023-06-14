import { Inject, Injectable } from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { faker } from "@faker-js/faker";
import { Cache } from "cache-manager";
import { useMinute } from "#/composables/time/ms";

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
    // @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  // public async isAccountRegistered(email: string): Promise<boolean> {
  // const user = await this.userModel.findOne({ email }).exec();
  // console.log("user: ", user);
  // return !!user;
  // }

  /**
   * Generates a random 6-digit email authentication code.
   * @returns {number} A promise that resolves with a 6-digit authentication code.
   */
  public createEmailAuthCode(email: string): number {
    const code = faker.number.int({ min: 100000, max: 999999 });
    this.cacheManager.set(email, code, useMinute(5));

    return code;
  }

  public login;
}
