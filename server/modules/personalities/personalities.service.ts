import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import { addRegistCharacterResourseTag, filterRegistCharacterResourseTag } from "../editions/composables/resourseTag";
import { PersonalityType } from "./enums/personality-type.enum";
import { Personality } from "./enums/personality.enum";

@Injectable()
export class PersonalitiesService {
  /** Resourse Message */
  private readonly REGIST_CHARACTER_RESOURSE: Personality[] = [Personality.Brave];
  private ALL_RESOURSES: ResourseVo["resourse"];

  constructor() {
    this.ALL_RESOURSES = Object.values(Personality).map<ResourseResponse>((personality) => {
      const returnResourse: ResourseVo["resourse"][number] = [
        Buffer.from(personality),
        ResourseType.Personality,
        undefined,
        []
      ];
      addRegistCharacterResourseTag(this.REGIST_CHARACTER_RESOURSE, personality, returnResourse[3]);

      return returnResourse;
    });
  }

  public supplement(subType: PersonalityType): ResourseVo["resourse"] {
    switch (subType) {
      case PersonalityType.RegistCharacter:
      default:
        return filterRegistCharacterResourseTag(this.ALL_RESOURSES);
    }
  }
}
