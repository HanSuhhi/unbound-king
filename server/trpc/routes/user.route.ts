import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { z } from "zod";
import { TrpcService } from "../trpc.service";
import { User } from "@/modules/users/schemas/user.schemas";
import { UsersService } from "@/modules/users/users.service";

@Injectable()
export class UserRoute {
  constructor(
    private readonly trpc: TrpcService,
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) { }

  private emailValidate = z.string().email();

  public route = this.trpc.router({
    findOneByEmail: this.trpc.procedure
      .input(this.emailValidate)
      .query(async ({ input: email }) => await this.userModel.findOne({ email }).exec()),
    createDefaultUserByEmail: this.trpc.procedure
      .input(z.object({
        email: this.emailValidate,
        name: z.string()
      }))
      .mutation(async ({ input: { email, name } }) => await this.userModel.create({
        email,
        name,
        roles: UsersService.DEFAULT_USER_ROLES
      }))
  });
}
