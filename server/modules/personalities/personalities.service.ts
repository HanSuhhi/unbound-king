import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import type { Edition } from "../editions/edition-type";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import { PersonalityType } from "./enums/personality-type.enum";
import { Personality } from "./enums/personality.enum";

@Injectable()
export class PersonalitiesService {
  static readonly REGIST_CHARACTER_PERSONALITY_VERSION: Edition<PersonalityType> = [PersonalityType.RegistCharacter, 1];

  private getRegistCharacterPersonalities(): ResourseVo {
    const personalityNames: Set<keyof typeof Personality> = new Set(["Brave"]);
    const resourse: ResourseVo["resourse"] = Array.from(personalityNames).map<ResourseResponse>(personalityName => [
      personalityName.toLowerCase(),
      Buffer.from(Personality[personalityName]),
      ResourseType.Personality
    ]);
    return {
      edition: PersonalitiesService.REGIST_CHARACTER_PERSONALITY_VERSION[1],
      editionName: PersonalitiesService.REGIST_CHARACTER_PERSONALITY_VERSION[0],
      resourse
    };
  }

  public supplement(subType: PersonalityType): ResourseVo {
    switch (subType) {
      case PersonalityType.RegistCharacter:
      default:
        return this.getRegistCharacterPersonalities();
    }
  }
}
