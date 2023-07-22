import { Injectable } from "@nestjs/common";
import { AssetsService } from "../assets/assets.service";
import { AssetType } from "../assets/enums/asset-type.enum";
import type { EditionVo } from "./vos/edition.vo";
import type { Edition, EditionType } from "./edition-type";
import type { ResourseVo } from "./vos/resourse.vo";
import { NoContentException } from "@/exceptions/no-content.exception";

@Injectable()
export class EditionsService {
  constructor(
    private readonly assetsService: AssetsService
  ) { }

  private getAssetVersions(): Edition {
    return AssetsService.STANDARD_ICON_VERSION;
  }

  public getEditions(): EditionVo {
    return {
      [AssetType.StandardIcon]: this.getAssetVersions()
    };
  }

  public supplement(editionType: EditionType): ResourseVo {
    switch (editionType) {
      case AssetType.StandardIcon:
        return this.assetsService.supplement(editionType);
      default:
        throw new NoContentException();
    }
  }
}
