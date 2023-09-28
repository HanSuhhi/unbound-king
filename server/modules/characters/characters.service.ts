import { BadRequestException, Injectable } from "@nestjs/common";
import type { Types } from "mongoose";
import { LineagesService } from "../lineages/lineages.service";
import type { RegistCharacterDto } from "./dtos/reigst-character.dto";
import type { RegistCharacterVo } from "./vos/regist-character.vo";
import type { RegistCharacterListVo } from "./vos/regist-character-list.vo";
import type { RemoveCharacterDto } from "./dtos/remove-character.dto";
import type { RemoveCharacterVo } from "./vos/remove-character.vo";
import { TrpcRouter } from "@/trpc/trpc.router";
import { i18nLangModel } from "#/composables/i18n";
import { RemoveResponse } from "@/enums/remove-response.enum";

@Injectable()
export class CharactersService {
  private readonly USER_DEFAULT_CHARACTER_LIMIT = 5;

  constructor(
    private readonly trpcRouter: TrpcRouter,
    private readonly lineageService: LineagesService
  ) { }

  public async createCharacter(userId: Types.ObjectId, characterDto: RegistCharacterDto): Promise<RegistCharacterVo> {
    const queryCharacterList = (await this.queryUserCharacters(userId)).list;
    const characters = queryCharacterList.map(character => character.name);
    if (characters.length === this.USER_DEFAULT_CHARACTER_LIMIT) throw new BadRequestException(i18nLangModel.arcade.regist_character.character_limit);
    if (characters.includes(characterDto.name)) throw new BadRequestException(i18nLangModel.arcade.regist_character.duplicate_name);
    if (!this.lineageService.isLineageBelongToRace(characterDto.race, characterDto.lineage)) throw new BadRequestException(i18nLangModel.arcade.regist_character.lineage_race_conflict);

    const { name, gender, profession, traits, race, lineage } = await this.trpcRouter.caller.character.createUserCharacter({
      belong: userId as unknown as string,
      character: characterDto
    });

    return { name, gender, profession, traits, race, lineage };
  }

  public async queryUserCharacters(userId: Types.ObjectId): Promise<RegistCharacterListVo> {
    return {
      list: await this.trpcRouter.caller.character.queryUserCharacters(userId as unknown as string)
    };
  }

  public async deleteUserCharacter(userid: Types.ObjectId, characterDto: RemoveCharacterDto): Promise<RemoveCharacterVo> {
    try {
      const character = await this.trpcRouter.caller.character.deleteUserCharacter({
        characterId: characterDto.id,
        userId: userid as unknown as string
      });
      return {
        state: character ? RemoveResponse.Success : RemoveResponse.NotFound
      };
    }
    catch (error) {
      return {
        state: RemoveResponse.Error
      };
    }
  }
}
