import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import { addRegistCharacterResourseTag, filterRegistCharacterResourseTag } from "../editions/composables/resourseTag";
import { LineageType } from "./enums/lineage-type.enum";
import { ElvesLineage, HumanLineage, YokaiLineage } from "./enums/lineage.enum";

@Injectable()
export class LineagesService {
  /** Resourse Message */
  private readonly REGIST_CHARACTER_RESOURSE: Array<HumanLineage | YokaiLineage | ElvesLineage> = [HumanLineage.Caveman, ElvesLineage.Tree, YokaiLineage.Fish];
  private ALL_RESOURSES: ResourseVo["resourse"];

  constructor() {
    this.ALL_RESOURSES = Object.values({ ...HumanLineage, ...YokaiLineage, ...ElvesLineage }).map<ResourseResponse>((race) => {
      const returnResourse: ResourseVo["resourse"][number] = [
        Buffer.from(race),
        ResourseType.Lineage,
        undefined,
        []
      ];
      addRegistCharacterResourseTag(this.REGIST_CHARACTER_RESOURSE, race, returnResourse[3]);

      return returnResourse;
    });
  }

  public supplement(subType: LineageType): ResourseVo["resourse"] {
    switch (subType) {
      case LineageType.RegistCharacter:
      default: return filterRegistCharacterResourseTag(this.ALL_RESOURSES);
    }
  }
}
