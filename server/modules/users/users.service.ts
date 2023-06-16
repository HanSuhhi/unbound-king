import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CommonModelService } from "../../composables/classes/model/common.service";
import { User } from "./schemas/user.schemas";

@Injectable()
export class UsersService extends CommonModelService<User> {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {
    super(userModel);
  }

  public findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }
}
