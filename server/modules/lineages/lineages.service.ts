import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import { addRegistCharacterResourseTag, filterRegistCharacterResourseTag } from "../editions/composables/resourseTag";
import { ResourseTag } from "../editions/enums/resourse-tag.enum";
import { Race } from "../races/enums/race.enum";
import { LineageType } from "./enums/lineage-type.enum";
import { ElvesLineage, HumanLineage, YokaiLineage } from "./enums/lineages.enum";
import { REGIST_CHARACTER_RESOURSE } from "./contents/regist-character.content";
import type { Lineages } from "./lineage-type";

@Injectable()
export class LineagesService {
  /** Resourse Message */
  static readonly REGIST_CHARACTER_RESOURSE = REGIST_CHARACTER_RESOURSE;
  private ALL_RESOURSES: ResourseVo["resourse"] = [];

  private initResourse(lineage: object, tag: ResourseTag) {
    this.ALL_RESOURSES.push(...Object.values({ ...lineage }).map<ResourseResponse>((race) => {
      const returnResourse: ResourseVo["resourse"][number] = [
        Buffer.from(race as Lineages),
        ResourseType.Lineage,
        undefined,
        [tag]
      ];
      addRegistCharacterResourseTag(LineagesService.REGIST_CHARACTER_RESOURSE, race, returnResourse[3]);

      return returnResourse;
    }));
  }

  constructor() {
    this.initResourse(HumanLineage, ResourseTag.HumanRace);
    this.initResourse(YokaiLineage, ResourseTag.YokaiRace);
    this.initResourse(ElvesLineage, ResourseTag.ElvesRace);
  }

  public supplement(subType: LineageType): ResourseVo["resourse"] {
    switch (subType) {
      case LineageType.RegistCharacter:
      default: return filterRegistCharacterResourseTag(this.ALL_RESOURSES);
    }
  }

  /**
   * Determines whether the given lineage belongs to the given race.
   * @param {Race} race The race to check.
   * @param {Lineages} lineage The lineage to check.
   * @returns {boolean} True if the lineage belongs to the race, False otherwise.
   */
  public isLineageBelongToRace(race: Race, lineage: Lineages): boolean {
    switch (race) {
      case Race.Human:
        return Object.values(HumanLineage).includes(lineage as HumanLineage);
      case Race.Yokai:
        return Object.values(YokaiLineage).includes(lineage as YokaiLineage);
      case Race.Elves:
      default:
        return Object.values(ElvesLineage).includes(lineage as ElvesLineage);
    }
  }
}
