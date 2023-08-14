import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import type { Edition } from "../editions/edition-type";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { GenderType } from "./enums/gender-type.enum";
import { Gender } from "./enums/gender.enum";

@Injectable()
export class GenderService {
  static readonly REGIST_CHARACTER_GENDER_VERSION: Edition<GenderType> = [GenderType.RegistCharacter, 1];

  private getRegistCharacterGenders(): ResourseVo {
    const genderNames: Set<keyof typeof Gender> = new Set(["Male"]);
    const resourse: ResourseVo["resourse"] = Array.from(genderNames).map<ResourseResponse>(gender => [
      gender.toLowerCase(),
      Buffer.from(Gender[gender]),
      ResourseType.Gender
    ]);
    return {
      edition: GenderService.REGIST_CHARACTER_GENDER_VERSION[1],
      editionName: GenderService.REGIST_CHARACTER_GENDER_VERSION[0],
      resourse
    };
  }

  public supplement(subType: GenderType): ResourseVo {
    switch (subType) {
      case GenderType.RegistCharacter:
      default:
        return this.getRegistCharacterGenders();
    }
  }
}
