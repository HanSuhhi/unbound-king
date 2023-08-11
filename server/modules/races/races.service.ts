import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import type { Edition } from "../editions/edition-type";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import { Race } from "./enums/race.enum";
import { RaceType } from "./enums/race-type.enum";

@Injectable()
export class RacesService {
  static readonly REGIST_CHARACTER_RACE_VERSION: Edition<RaceType> = [RaceType.RegistCharacter, 1];
  static readonly RACE_LIST_VERSION: Edition<RaceType> = [RaceType.RaceList, 1];

  private getRaceList() {
    const resourse: ResourseVo["resourse"] = Object.keys(Race).map<ResourseResponse>(raceName => [
      raceName.toLowerCase(),
      Buffer.from(Race[raceName]),
      ResourseType.Race
    ]);

    return {
      edition: RacesService.RACE_LIST_VERSION[1],
      editionName: RacesService.RACE_LIST_VERSION[0],
      resourse
    };
  }

  private getRegistCharacterProfessions(): ResourseVo {
    const raceNames: Set<keyof typeof Race> = new Set(["Humans"]);
    const resourse: ResourseVo["resourse"] = Array.from(raceNames).map<ResourseResponse>(raceName => [
      raceName.toLowerCase(),
      Buffer.from(Race[raceName]),
      ResourseType.Race
    ]);

    return {
      edition: RacesService.REGIST_CHARACTER_RACE_VERSION[1],
      editionName: RacesService.REGIST_CHARACTER_RACE_VERSION[0],
      resourse
    };
  }

  public supplement(subType: RaceType): ResourseVo {
    switch (subType) {
      case RaceType.RaceList: {
        return this.getRaceList();
      }
      case RaceType.RegistCharacter:
      default:
        return this.getRegistCharacterProfessions();
    }
  }
}
