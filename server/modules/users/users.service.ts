import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import type { UserDocument } from "./schemas/user.schemas";
import { User } from "./schemas/user.schemas";
import { CommonModelService } from "@/classes/model/common.service";

@Injectable()
export class UsersService extends CommonModelService<User> {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {
    super(userModel);
  }

  /**
   * Checks if a user with the given email exists and returns a boolean to indicate the result.
   * @param {string} email - The email of the user to validate.
   * @param {ValidateUserOption} options - An optional object containing an options parameter. If the throwIfExists property is set to true, a ForbiddenException will be thrown when a user already exists.
   * @returns {Promise<boolean>} - A Promise that resolves to true if the user already exists. Otherwise, false.
   */
  public async findOneByEmail(email: string): Promise<UserDocument> {
    const user = await this.userModel.findOne({ email }).exec();
    return user;
  }
}
