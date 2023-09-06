import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { type HydratedDocument, Types } from "mongoose";
import { Gender } from "@/modules/gender/enums/gender.enum";
import { Profession } from "@/modules/professions/enums/profession.enum";
import { Trait } from "@/modules/traits/enums/trait.enum";
import { Race } from "@/modules/races/enums/race.enum";
import { ElvesLineage, HumanLineage, YokaiLineage } from "@/modules/lineages/enums/lineage.enum";

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
    type: Types.ObjectId,
    trim: true
  })
  belong: Types.ObjectId;

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
    type: Array,
    enum: Trait
  })
  traits: Trait[];

  @Prop({
    required: true,
    type: String,
    trim: true,
    enum: Race
  })
  race: Race;

  @Prop({
    required: true,
    type: String,
    trim: true,
    enum: { ...HumanLineage, ...YokaiLineage, ...ElvesLineage }
  })
  lineage: HumanLineage | YokaiLineage | ElvesLineage;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
