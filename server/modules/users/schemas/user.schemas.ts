import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import type { HydratedDocument } from "mongoose";
import { Role } from "@/modules/roles/enum/role.enum";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    required: false,
    type: String,
    trim: true
  })
  email?: string;

  @Prop({
    required: true,
    type: String,
    trim: true
  })
  nickname: string;

  @Prop({
    required: true,
    type: Array<Role>,
    default: [Role.Player]
  })
  roles: Array<Role>;
}

export const UserSchema = SchemaFactory.createForClass(User);
