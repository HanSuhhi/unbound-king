import { Injectable } from "@nestjs/common";
import { AssetsService } from "../assets/assets.service";
import { AssetType } from "../assets/enums/asset-type.enum";
import { ProfessionType } from "../professions/enums/profession-type.enum";
import { ProfessionsService } from "../professions/professions.service";
import { PersonalityType } from "../personalities/enums/personality-type.enum";
import { PersonalitiesService } from "../personalities/personalities.service";
import { TraitType } from "../traits/enums/trait-type.enum";
import { TraitsService } from "../traits/traits.service";
import { RacesService } from "../races/races.service";
import { RaceType } from "../races/enums/race-type.enum";
import { LineagesService } from "../lineages/lineages.service";
import { LineageType } from "../lineages/enums/lineage-type.enum";
import { GenderType } from "../gender/enums/gender-type.enum";
import { GenderService } from "../gender/gender.service";
import type { EditionVo } from "./vos/edition.vo";
import type { EditionType } from "./edition-type";
import type { ResourseVo } from "./vos/resourse.vo";
import { ResourseTag } from "./enums/resourse-tag.enum";
import { NoContentException } from "@/exceptions/no-content.exception";

@Injectable()
export class EditionsService {
  constructor(
    private readonly assetsService: AssetsService,
    private readonly professionService: ProfessionsService,
    private readonly personalityService: PersonalitiesService,
    private readonly traitsService: TraitsService,
    private readonly racesService: RacesService,
    private readonly lineagesService: LineagesService,
    private readonly genderService: GenderService
  ) { }

  public getEditions(): EditionVo {
    return {
      [AssetType.StandardIcon]: AssetsService.STANDARD_ICON_EDITION,
      [ProfessionType.RegistCharacter]: ProfessionsService.REGIST_CHARACTER_PROFESSION_VERSION,
      [PersonalityType.RegistCharacter]: PersonalitiesService.REGIST_CHARACTER_PERSONALITY_VERSION,
      [TraitType.RegistCharacter]: TraitsService.REGIST_CHARACTER_PERSONALITY_VERSION,
      [RaceType.RaceList]: RacesService.RACE_LIST_VERSION,
      [RaceType.RegistCharacter]: RacesService.REGIST_CHARACTER_RACE_VERSION,
      [LineageType.RegistCharacter]: LineagesService.REGIST_CHARACTER_LINEAGE_VERSION,
      [GenderType.RegistCharacter]: GenderService.REGIST_CHARACTER_GENDER_VERSION
    };
  }

  public supplement(editionType: EditionType): ResourseVo {
    switch (editionType) {
      case AssetType.StandardIcon: return this.assetsService.supplement(AssetType.StandardIcon);
      case ProfessionType.RegistCharacter: {
        const resourse = this.professionService.supplement(ProfessionType.RegistCharacter);
        resourse.tags = [ResourseTag.RegistCharacter];
        return resourse;
      }
      case PersonalityType.RegistCharacter: {
        const resourse = this.personalityService.supplement(PersonalityType.RegistCharacter);
        resourse.tags = [ResourseTag.RegistCharacter];
        return resourse;
      }
      case TraitType.RegistCharacter: {
        const resourse = this.traitsService.supplement(TraitType.RegistCharacter);
        resourse.tags = [ResourseTag.RegistCharacter];
        return resourse;
      }
      case RaceType.RaceList: return this.racesService.supplement(RaceType.RaceList);
      case RaceType.RegistCharacter: {
        const resourse = this.racesService.supplement(RaceType.RegistCharacter);
        resourse.tags = [ResourseTag.RegistCharacter];
        return resourse;
      }
      case LineageType.RegistCharacter: {
        const resourse = this.lineagesService.supplement(LineageType.RegistCharacter);
        resourse.tags = [ResourseTag.RegistCharacter];
        return resourse;
      }
      case GenderType.RegistCharacter: {
        const resourse = this.genderService.supplement(GenderType.RegistCharacter);
        resourse.tags = [ResourseTag.RegistCharacter];
        return resourse;
      }
      default:
        throw new NoContentException();
    }
  }
}
