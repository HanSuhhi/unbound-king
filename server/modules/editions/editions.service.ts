import { Injectable } from "@nestjs/common";
import { AssetsService } from "../assets/assets.service";
import { AssetType } from "../assets/enums/asset-type.enum";
import { ProfessionType } from "../professions/enums/profession-type.enum";
import { ProfessionsService } from "../professions/professions.service";
import type { EditionVo } from "./vos/edition.vo";
import type { EditionType } from "./edition-type";
import type { ResourseVo } from "./vos/resourse.vo";
import { NoContentException } from "@/exceptions/no-content.exception";

@Injectable()
export class EditionsService {
  constructor(
    private readonly assetsService: AssetsService,
    private readonly professionService: ProfessionsService
  ) { }

  public getEditions(): EditionVo {
    return {
      [AssetType.StandardIcon]: AssetsService.STANDARD_ICON_EDITION,
      [ProfessionType.RegistCharacter]: ProfessionsService.REGIST_CHARACTER_PROFESSION_VERSION
    };
  }

  public supplement(editionType: EditionType): ResourseVo {
    switch (editionType) {
      case AssetType.StandardIcon:
        return this.assetsService.supplement(AssetType.StandardIcon);
      case ProfessionType.RegistCharacter:
        return this.professionService.supplement(ProfessionType.RegistCharacter);
      default:
        throw new NoContentException();
    }
  }
}
