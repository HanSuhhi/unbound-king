import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import type { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    required: false,
    type: String,
    trim: true
  })
  email?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
