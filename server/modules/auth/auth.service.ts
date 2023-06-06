import { Injectable } from "@nestjs/common";
import { faker } from "@faker-js/faker";

@Injectable()
export class AuthService {
  /**
   * Generates a random 6-digit email authentication code.
   * @returns {number} A promise that resolves with a 6-digit authentication code.
   */
  public createEmailAuthCode(): number {
    return faker.number.int({ min: 100000, max: 999999 });
  }
}
