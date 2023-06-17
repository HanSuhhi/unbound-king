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

  public async validateUserByEmail(email: string, options?: ValidateUserOptions): Promise<boolean> {
    const haveUser = !!(await this.userModel.findOne({ email }).exec());
    if (haveUser && options.throwIfExists) throw new ForbiddenException("User already exists");
    return haveUser;
  }

  public async findOneByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email }).exec();
    return user;
  }
}
