import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { z } from "zod";
import { TrpcService } from "../trpc.service";
import { Character } from "@/modules/characters/schemas/character.schemas";
import { ElvesLineage, HumanLineage, YokaiLineage } from "@/modules/lineages/enums/lineages.enum";
import { Trait } from "@/modules/traits/enums/trait.enum";
import { Profession } from "@/modules/professions/enums/profession.enum";
import { Gender } from "@/modules/gender/enums/gender.enum";
import { Race } from "@/modules/races/enums/race.enum";

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
          traits: z.array(z.nativeEnum(Trait)),
          race: z.nativeEnum(Race),
          lineage: z.nativeEnum({ ...HumanLineage, ...YokaiLineage, ...ElvesLineage })
        })
      }))
      .mutation(async ({ input: { belong, character: { name, gender, profession, traits, race, lineage } } }) => {
        return await this.characterModel.create({
          name,
          belong,
          gender,
          profession,
          traits,
          race,
          lineage
        });
      }),
    queryUserCharacters: this.trpc.procedure
      .input(z.string())
      .query(async ({ input: userid }) => {
        return this.characterModel.find({
          belong: userid
        }).exec();
      })
  });
}
