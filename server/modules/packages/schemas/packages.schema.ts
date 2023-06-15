import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import type { HydratedDocument } from "mongoose";

export type PackageDocument = HydratedDocument<Package>;

@Schema()
export class Package {
  @Prop()
  name: string;
}

export const PackageSchema = SchemaFactory.createForClass(Package);
