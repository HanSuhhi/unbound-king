import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import { filterRegistCharacterResourseTag } from "../editions/composables/resourseTag";
import { ElvesLineage, HumanLineage, YokaiLineage } from "../lineages/enums/lineages.enum";
import { Gender } from "../gender/enums/gender.enum";
import { Profession } from "./enums/profession.enum";
import { ProfessionType } from "./enums/profession-type.enum";
import type { RegistCharacterQueryDto } from "./dtos/regist-character.dto";
import type { RegistCharacterProfessionVo } from "./vos/regist-character.vo";
import { professionFrom } from "./configs/profession-from";

@Injectable()
export class ProfessionsService {
  private ALL_RESOURSES: ResourseVo["resourse"];

  constructor() {
    this.ALL_RESOURSES = Object.values(Profession).map<ResourseResponse>((profession) => {
      const returnResourse: ResourseResponse = [
        Buffer.from(profession),
        ResourseType.Profession,
        undefined,
        []
      ];

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

  public getProfessionWhenRegistCharacter({ gender: userGender, lineage: userLineage }: RegistCharacterQueryDto): RegistCharacterProfessionVo {
    const professions: Set<Profession> = new Set();
    professionFrom.forEach(([profession, lineage, gender]) => {
      const targetLineage = HumanLineage[lineage] || YokaiLineage[lineage] || ElvesLineage[lineage];
      if (targetLineage !== userLineage) return;
      if (!gender || Gender[gender] === userGender) professions.add(Profession[profession]);
    });
    return { professions: Array.from(professions) };
  }
}
