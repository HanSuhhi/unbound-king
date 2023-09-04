import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import { addRegistCharacterResourseTag, filterRegistCharacterResourseTag } from "../editions/composables/resourseTag";
import { TraitType } from "./enums/trait-type.enum";
import { Trait } from "./enums/trait.enum";

@Injectable()
export class TraitsService {
  /** Resourse Message */
  private readonly REGIST_CHARACTER_RESOURSE: Trait[] = [Trait.Listener];
  private ALL_RESOURSES: ResourseVo["resourse"];

  constructor() {
    this.ALL_RESOURSES = Object.values(Trait).map<ResourseResponse>((trait) => {
      const returnResourse: ResourseVo["resourse"][number] = [
        Buffer.from(trait),
        ResourseType.Trait,
        undefined,
        []
      ];
      addRegistCharacterResourseTag(this.REGIST_CHARACTER_RESOURSE, trait, returnResourse[3]);

      return returnResourse;
    });
  }

  public supplement(subType: TraitType): ResourseVo["resourse"] {
    switch (subType) {
      case TraitType.RegistCharacter:
      default:
        return filterRegistCharacterResourseTag(this.ALL_RESOURSES);
    }
  }
}
