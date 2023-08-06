import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import type { Edition } from "../editions/edition-type";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import { ProfessionType } from "./enums/profession-type.enum";
import { Profession } from "./enums/profession.enum";

@Injectable()
export class ProfessionsService {
  static readonly REGIST_CHARACTER_PROFESSION_VERSION: Edition<ProfessionType> = [ProfessionType.RegistCharacter, 1];

  private getRegistCharacterProfessions(): ResourseVo {
    const professionNames: Set<keyof typeof Profession> = new Set(["Swordman"]);
    const resourse: ResourseVo["resourse"] = Array.from(professionNames).map<ResourseResponse>(professionName => [
      professionName.toLowerCase(),
      Buffer.from(Profession[professionName]),
      ResourseType.Prefession
    ]);
    return {
      edition: ProfessionsService.REGIST_CHARACTER_PROFESSION_VERSION[1],
      editionName: ProfessionsService.REGIST_CHARACTER_PROFESSION_VERSION[0],
      resourse
    };
  }

  public supplement(subType: ProfessionType): ResourseVo {
    switch (subType) {
      case ProfessionType.RegistCharacter:
      default:
        return this.getRegistCharacterProfessions();
    }
  }
}
