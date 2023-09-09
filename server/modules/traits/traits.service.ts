import { Buffer } from "node:buffer";
import { Injectable } from "@nestjs/common";
import { sampleSize } from "lodash";
import type { OnlyResourseVo, ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import { addRegistCharacterResourseTag, filterRegistCharacterResourseTag } from "../editions/composables/resourseTag";
import { Trait } from "./enums/trait.enum";

@Injectable()
export class TraitsService {
  /** Resourse Message */
  private readonly REGIST_CHARACTER_RESOURSE: Trait[] = [Trait.Listener, Trait.Claim, Trait.CoinCollector];
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

  public sampleRegistCharacterTraits(): OnlyResourseVo {
    const SAMPLE_TRAIT_LENGTH = 2;
    const traitPool = filterRegistCharacterResourseTag(this.ALL_RESOURSES);
    const decidedResourse = sampleSize(traitPool, SAMPLE_TRAIT_LENGTH);

    return {
      resourse: decidedResourse
    };
  }
}
