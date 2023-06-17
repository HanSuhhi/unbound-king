import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./schemas/user.schemas";
import { CommonModelService } from "@/classes/model/common.service";

interface ValidateUserOptions {
  throwIfExists?: boolean
}

@Injectable()
export class UsersService extends CommonModelService<User> {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {
    super(userModel);
  }

  /**
   * Finds the user by the provided email and returns the query result.
   * @param {string} email - The email of the user to look up.
   * @returns {Promise<User>} - The matched user instance.
   */
  public async validateUserByEmail(email: string, options?: ValidateUserOptions): Promise<boolean> {
    const haveUser = !!(await this.userModel.findOne({ email }).exec());
    if (haveUser && options?.throwIfExists) throw new ForbiddenException("User already exists");
    return haveUser;
  }

  /**
   * Checks if a user with the given email exists and returns a boolean to indicate the result.
   * @param {string} email - The email of the user to validate.
   * @param {ValidateUserOption} options - An optional object containing an options parameter. If the throwIfExists property is set to true, a ForbiddenException will be thrown when a user already exists.
   * @returns {Promise<boolean>} - A Promise that resolves to true if the user already exists. Otherwise, false.
   */
  public async findOneByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email }).exec();
    return user;
  }
}
