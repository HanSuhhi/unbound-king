import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import { addRegistCharacterResourseTag, filterRegistCharacterResourseTag } from "../editions/composables/resourseTag";
import { ResourseTag } from "../editions/enums/resourse-tag.enum";
import { ProfessionType } from "./enums/profession-type.enum";
import { Profession } from "./enums/profession.enum";

@Injectable()
export class ProfessionsService {
  /** Resourse Message */
  // private readonly REGIST_CHARACTER_RESOURSE: Profession[] = [Profession.Sworder, Profession.Farmer];
  private readonly PROFESSION_TAGS: Record<Profession, ResourseTag[]> = {
    [Profession.Farmer]: [ResourseTag.CavemanLineage, Re]
  };

  private ALL_RESOURSES: ResourseVo["resourse"];

  constructor() {
    this.ALL_RESOURSES = Object.values(Profession).map<ResourseResponse>((profession) => {
      const returnResourse: ResourseResponse = [
        Buffer.from(profession),
        ResourseType.Profession,
        undefined,
        []
      ];
      addRegistCharacterResourseTag(this.REGIST_CHARACTER_RESOURSE, profession, returnResourse[3]);

      return returnResourse;
    });
  }

  public supplement(subType: ProfessionType): ResourseVo["resourse"] {
    switch (subType) {
      case ProfessionType.RegistCharacter:
      default:
        return filterRegistCharacterResourseTag(this.ALL_RESOURSES);
    }
  }
}
