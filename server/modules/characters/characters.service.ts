import { BadRequestException, Injectable } from "@nestjs/common";
import type { Types } from "mongoose";
import { LineagesService } from "../lineages/lineages.service";
import type { RegistCharacterDto } from "./dtos/reigst-character.dto";
import type { RegistCharacterVo } from "./vos/regist-character.vo";
import { TrpcRouter } from "@/trpc/trpc.router";
import { i18nLangModel } from "#/composables/i18n";

@Injectable()
export class CharactersService {
  private readonly USER_DEFAULT_CHARACTER_LIMIT = 5;

  constructor(
    private readonly trpcRouter: TrpcRouter,
    private readonly lineageService: LineagesService
  ) { }

  public async createCharacter(userId: Types.ObjectId, characterDto: RegistCharacterDto): Promise<RegistCharacterVo> {
    const characters = (await this.queryUserCharacters(userId)).map(character => character.name);
    if (characters.length === this.USER_DEFAULT_CHARACTER_LIMIT) throw new BadRequestException(i18nLangModel.arcade.regist_character.character_limit);
    if (characters.includes(characterDto.name)) throw new BadRequestException(i18nLangModel.arcade.regist_character.duplicate_name);
    if (this.lineageService.isLineageBelongToRace(characterDto.race, characterDto.lineage)) throw new BadRequestException(i18nLangModel.arcade.regist_character.lineage_race_conflict);

    const { name, gender, profession, traits, race, lineage } = await this.trpcRouter.caller.character.createUserCharacter({
      belong: userId as unknown as string,
      character: characterDto
    });

    return { name, gender, profession, traits, race, lineage };
  }

  public async queryUserCharacters(userId: Types.ObjectId): Promise<RegistCharacterVo[]> {
    return await this.trpcRouter.caller.character.queryUserCharacters(userId as unknown as string);
  }
}
