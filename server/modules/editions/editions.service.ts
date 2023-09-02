import { Injectable } from "@nestjs/common";
import { forEach } from "lodash";
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
import type { VerifyVo } from "./vos/verify.vo";
import type { VerifyDto } from "./dtos/verify.dto";
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

  private getService(type: EditionType): GenderService | ProfessionsService | PersonalitiesService | TraitsService | RacesService | LineagesService {
    switch (type) {
      case ProfessionType.RegistCharacter: return this.professionService;
      case PersonalityType.RegistCharacter: return this.personalityService;
      case TraitType.RegistCharacter: return this.traitsService;
      case RaceType.RegistCharacter: return this.racesService;
      case LineageType.RegistCharacter: return this.lineagesService;
      case GenderType.RegistCharacter: return this.genderService;
      default: throw new Error(`Unknown service for ${type}`);
    }
  }

  /**
   * @deprecated The interface will be deprecated soon, use the new interface verification edition.
   */
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

  /**
   * @deprecated The interface will be deprecated soon, use the new interface verification edition.
   */
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

  public verify(editions?: VerifyDto): VerifyVo {
    const standardEditions = this.getEditions();
    const resourses = {};
    forEach(standardEditions, ([_, currentEdition], editionType) => {
      const clientEdition = editions[editionType];
      if (currentEdition === clientEdition) return;
      switch (editionType) {
        case AssetType.StandardIcon:
          resourses[editionType] = this.assetsService.supplement(AssetType.StandardIcon);
          break;
        case ProfessionType.RegistCharacter:
        case TraitType.RegistCharacter:
        case RaceType.RegistCharacter:
        case LineageType.RegistCharacter:
        case GenderType.RegistCharacter:
        case PersonalityType.RegistCharacter: {
          const resourse = this.getService(editionType).supplement(editionType as never);
          resourse.tags = [ResourseTag.RegistCharacter];
          resourses[editionType] = resourse;
          break;
        }
        case RaceType.RaceList:
          resourses[editionType] = this.racesService.supplement(RaceType.RaceList);
          break;
        default:
          throw new NoContentException();
      }
    });

    return resourses as VerifyVo;
  }
}
