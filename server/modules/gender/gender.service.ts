import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { addRegistCharacterResourseTag, filterRegistCharacterResourseTag } from "../editions/composables/resourseTag";
import { GenderType } from "./enums/gender-type.enum";
import { Gender } from "./enums/gender.enum";

@Injectable()
export class GenderService {
  /** Resourse Message */
  private readonly REGIST_CHARACTER_RESOURSE: Gender[] = [Gender.Male, Gender.Female];
  private ALL_RESOURSES: ResourseVo["resourse"];

  constructor() {
    this.ALL_RESOURSES = Object.values(Gender).map<ResourseResponse>((gender) => {
      const returnResourse: ResourseVo["resourse"][number] = [
        Buffer.from(gender),
        ResourseType.Gender,
        undefined,
        []
      ];
      addRegistCharacterResourseTag(this.REGIST_CHARACTER_RESOURSE, gender, returnResourse[3]);

      return returnResourse;
    });
  }

  public supplement(subType: GenderType): ResourseVo["resourse"] {
    switch (subType) {
      case GenderType.RegistCharacter:
      default:
        return filterRegistCharacterResourseTag(this.ALL_RESOURSES);
    }
  }
}
