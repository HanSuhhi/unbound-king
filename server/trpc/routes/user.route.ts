import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { z } from "zod";
import { TrpcService } from "../trpc.service";
import { User } from "@/modules/users/schemas/user.schemas";
import { Role } from "#/composables/enum/role.enum";

@Injectable()
export class UserRoute {
  static DEFAULT_USER_ROLES = [Role.Player];

  constructor(
    private readonly trpc: TrpcService,
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) { }

  private emailValidate = z.string().email();

  public route = this.trpc.router({
    findOneByEmail: this.trpc.procedure
      .input(this.emailValidate)
      .query(async ({ input: email }) => await this.userModel.findOne({ email }).exec()),
    findOneByEmailAndUpdate: this.trpc.procedure
      .input(z.object({
        email: this.emailValidate,
        update: z.object({
          nickname: z.string().optional()
        })
      }))
      .mutation(async ({ input: { email, update } }) => await this.userModel.findOneAndUpdate({ email }, {
        $set: update
      }, { new: true })),
    createDefaultUserByEmail: this.trpc.procedure
      .input(z.object({
        email: this.emailValidate,
        nickname: z.string()
      }))
      .mutation(async ({ input: { email, nickname } }) => await this.userModel.create({
        email,
        nickname,
        roles: UserRoute.DEFAULT_USER_ROLES
      }))
  });
}
