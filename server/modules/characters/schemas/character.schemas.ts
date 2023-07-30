import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import type { HydratedDocument } from "mongoose";
import { Gender } from "@/enums/gender.enum";
import { Personality } from "@/modules/personalities/enums/personality.enum";
import { Profession } from "@/modules/professions/enums/profession.enum";
import { Trait } from "@/modules/traits/enums/trait.enum";

export type CharacterDocument = HydratedDocument<Character>;

@Schema()
export class Character {
  @Prop({
    required: true,
    type: String,
    trim: true
  })
  name: string;

  @Prop({
    required: true,
    type: String,
    enum: Gender,
    trim: true
  })
  gender: Gender;

  @Prop({
    required: true,
    type: String,
    enum: Profession
  })
  profession: Profession;

  @Prop({
    required: true,
    type: String,
    enum: Personality
  })
  personality: Personality;

  @Prop({
    required: true,
    type: Array,
    enum: Trait
  })
  traits: Trait;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
