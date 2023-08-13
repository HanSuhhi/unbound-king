import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import type { Edition } from "../editions/edition-type";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import type { Race } from "../races/enums/race.enum";
import { LineageType } from "./enums/lineage-type.enum";
import { ElvesLineage, HumanLineage, type LineageKeys, YokaiLineage } from "./enums/lineage.enum";

@Injectable()
export class LineagesService {
  static readonly REGIST_CHARACTER_LINEAGE_VERSION: Edition<LineageType> = [LineageType.RegistCharacter, 1];

  private getRegistCharacterLineages(): ResourseVo {
    const lineageNames: Set<LineageKeys> = new Set(["Caveman", "Fish", "Tree"]);
    const resourse: ResourseVo["resourse"] = Array.from(lineageNames).map<ResourseResponse>((lineageName) => {
      const raceLineages = [HumanLineage, YokaiLineage, ElvesLineage];
      let race: Race;
      let lineage: HumanLineage | YokaiLineage | ElvesLineage;
      for (const raceLineage of raceLineages) {
        if (raceLineage[lineageName]) {
          lineage = raceLineage[lineageName];
          race = (Reflect.getPrototypeOf(raceLineage) as { race: Race }).race;
          break;
        }
      }

      return [
        lineageName.toLowerCase(),
        Buffer.from([lineage, race].join("$")),
        ResourseType.Lineage
      ];
    });

    return {
      edition: LineagesService.REGIST_CHARACTER_LINEAGE_VERSION[1],
      editionName: LineagesService.REGIST_CHARACTER_LINEAGE_VERSION[0],
      resourse
    };
  }

  public supplement(subType: LineageType): ResourseVo {
    switch (subType) {
      case LineageType.RegistCharacter:
      default:
        return this.getRegistCharacterLineages();
    }
  }
}
