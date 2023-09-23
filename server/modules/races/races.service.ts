import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import type { Edition } from "../editions/edition-type";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import { addRegistCharacterResourseTag, filterRegistCharacterResourseTag } from "../editions/composables/resourseTag";
import { Race } from "./enums/race.enum";
import { RaceType } from "./enums/race-type.enum";

@Injectable()
export class RacesService {
  /** Version Message */
  static readonly LIST_VERSION: Edition<RaceType> = [RaceType.RaceList, 1];
  static readonly REGIST_CHARACTER_VERSION: Edition<RaceType> = [RaceType.RegistCharacter, 1];

  /** Resourse Message */
  private readonly REGIST_CHARACTER_RESOURSE: Race[] = [Race.Human, Race.Yokai, Race.Elves];
  private ALL_RESOURSES: ResourseVo["resourse"];

  constructor() {
    this.ALL_RESOURSES = Object.values(Race).map<ResourseResponse>((race) => {
      const returnResourse: ResourseVo["resourse"][number] = [
        Buffer.from(race),
        ResourseType.Race,
        undefined,
        []
      ];
      addRegistCharacterResourseTag(this.REGIST_CHARACTER_RESOURSE, race, returnResourse[3]);

      return returnResourse;
    });
  }

  public supplement(subType: RaceType): ResourseVo["resourse"] {
    switch (subType) {
      case RaceType.RaceList: return this.ALL_RESOURSES;
      case RaceType.RegistCharacter:
      default: return filterRegistCharacterResourseTag(this.ALL_RESOURSES);
    }
  }
}
