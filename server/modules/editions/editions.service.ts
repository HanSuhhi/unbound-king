import { Injectable } from "@nestjs/common";
import { AssetsService } from "../assets/assets.service";
import { ProfessionType } from "../professions/enums/profession-type.enum";
import { ProfessionsService } from "../professions/professions.service";
import { TraitType } from "../traits/enums/trait-type.enum";
import { TraitsService } from "../traits/traits.service";
import { RacesService } from "../races/races.service";
import { RaceType } from "../races/enums/race-type.enum";
import { LineagesService } from "../lineages/lineages.service";
import { LineageType } from "../lineages/enums/lineage-type.enum";
import { GenderType } from "../gender/enums/gender-type.enum";
import { GenderService } from "../gender/gender.service";
import { AssetType } from "../assets/enums/asset-type.enum";
import { ResourseTag } from "./enums/resourse-tag.enum";
import type { Edition } from "./edition-type";
import type { ResourseVo } from "./vos/resourse.vo";
import { NoContentException } from "@/exceptions/no-content.exception";

@Injectable()
export class EditionsService {
  /** Version Message */
  static readonly RegistCharacterVersion: Edition<ResourseTag> = [ResourseTag.RegistCharacter, 1];
  static readonly InitVersion: Edition<ResourseTag> = [ResourseTag.Init, 1];

  constructor(
    private readonly assetsService: AssetsService,
    private readonly professionService: ProfessionsService,
    private readonly traitsService: TraitsService,
    private readonly racesService: RacesService,
    private readonly lineagesService: LineagesService,
    private readonly genderService: GenderService
  ) { }

  public getCurrentResourseByTag(tag: ResourseTag, currentEdition?: Edition[1]): ResourseVo {
    const currentVersion = Number(currentEdition);
    switch (tag) {
      case ResourseTag.Init: {
        const currentResourse: ResourseVo = {
          editionName: ResourseTag.Init,
          edition: EditionsService.InitVersion[1],
          resourse: []
        };
        if (currentVersion !== EditionsService.InitVersion[1]) currentResourse.resourse = this.assetsService.supplement(AssetType.StandardIcon);
        return currentResourse;
      }
      case ResourseTag.RegistCharacter: {
        const currentResourse: ResourseVo = {
          editionName: ResourseTag.RegistCharacter,
          edition: EditionsService.InitVersion[1],
          resourse: []
        };
        if (currentVersion !== EditionsService.RegistCharacterVersion[1]) {
          currentResourse.resourse = [
            ...this.professionService.supplement(ProfessionType.RegistCharacter),
            ...this.traitsService.supplement(TraitType.RegistCharacter),
            ...this.racesService.supplement(RaceType.RegistCharacter),
            ...this.lineagesService.supplement(LineageType.RegistCharacter),
            ...this.genderService.supplement(GenderType.RegistCharacter)
          ];
        }
        return currentResourse;
      }
      default:
        throw new NoContentException();
    }
  }
}
