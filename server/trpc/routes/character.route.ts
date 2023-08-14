import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { z } from "zod";
import { TrpcService } from "../trpc.service";
import { Character } from "@/modules/characters/schemas/character.schemas";
import { Gender } from "@/modules/gender/enums/gender.enum";
import { Profession } from "@/modules/professions/enums/profession.enum";
import { Personality } from "@/modules/personalities/enums/personality.enum";
import { Trait } from "@/modules/traits/enums/trait.enum";
import { Race } from "@/modules/races/enums/race.enum";
import { ElvesLineage, HumanLineage, YokaiLineage } from "@/modules/lineages/enums/lineage.enum";

@Injectable()
export class CharacterRoute {
  constructor(
    private readonly trpc: TrpcService,
    @InjectModel(Character.name) private readonly characterModel: Model<Character>
  ) { }

  public route = this.trpc.router({
    createUserCharacter: this.trpc.procedure
      .input(z.object({
        belong: z.string(),
        character: z.object({
          name: z.string(),
          gender: z.nativeEnum(Gender),
          profession: z.nativeEnum(Profession),
          personality: z.nativeEnum(Personality),
          traits: z.array(z.nativeEnum(Trait)),
          race: z.nativeEnum(Race),
          lineage: z.nativeEnum({ ...HumanLineage, ...YokaiLineage, ...ElvesLineage })
        })
      }))
      .mutation(async ({ input: { belong, character: { name, gender, profession, personality, traits, race, lineage } } }) => {
        return await this.characterModel.create({
          name,
          belong,
          gender,
          profession,
          personality,
          traits,
          race,
          lineage
        });
      })
  });
}
