import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import type { Edition } from "../editions/edition-type";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import { TraitType } from "./enums/trait-type.enum";
import { Trait } from "./enums/trait.enum";

@Injectable()
export class TraitsService {
  static readonly REGIST_CHARACTER_PERSONALITY_VERSION: Edition<TraitType> = [TraitType.RegistCharacter, 1];

  private getRegistCharacterProfessions(): ResourseVo {
    const traitNames: Set<keyof typeof Trait> = new Set(["Listener"]);
    const resourse: ResourseVo["resourse"] = Array.from(traitNames).map<ResourseResponse>(traitName => [
      traitName.toLowerCase(),
      Buffer.from(Trait[traitName]),
      ResourseType.Trait
    ]);
    return {
      edition: TraitsService.REGIST_CHARACTER_PERSONALITY_VERSION[1],
      editionName: TraitsService.REGIST_CHARACTER_PERSONALITY_VERSION[0],
      resourse
    };
  }

  public supplement(subType: TraitType): ResourseVo {
    switch (subType) {
      case TraitType.RegistCharacter:
      default:
        return this.getRegistCharacterProfessions();
    }
  }
}
