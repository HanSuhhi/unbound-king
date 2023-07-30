import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { z } from "zod";
import { TrpcService } from "../trpc.service";
import { Character } from "@/modules/characters/schemas/character.schemas";
import { Gender } from "@/enums/gender.enum";
import { Profession } from "@/modules/professions/enums/profession.enum";
import { Personality } from "@/modules/personalities/enums/personality.enum";
import { Trait } from "@/modules/traits/enums/trait.enum";

@Injectable()
export class CharacterRoute {
  constructor(
    private readonly trpc: TrpcService,
    @InjectModel(Character.name) private readonly characterModel: Model<Character>
  ) { }

  public route = this.trpc.router({
    createUserCharacter: this.trpc.procedure
      .input(z.object({
        name: z.string(),
        gender: z.nativeEnum(Gender),
        profession: z.nativeEnum(Profession),
        personality: z.nativeEnum(Personality),
        traits: z.nativeEnum(Trait).array()
      }))
      .mutation(async ({ input: { name, gender, profession, personality, traits } }) => {
        return await this.characterModel.create({
          name,
          gender,
          profession,
          personality,
          traits
        });
      })
  });
}
