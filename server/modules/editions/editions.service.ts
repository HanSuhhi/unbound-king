import { Injectable } from "@nestjs/common";
import { AssetsService } from "../assets/assets.service";
import type { AssetType } from "../assets/enums/asset-type.enum";
import type { EditionVo } from "./vos/edition.vo";
import type { Edition, EditionType } from "./edition-type";
import type { ResourseVo } from "./vos/resourse.vo";

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
      asset: this.getAssetVersions()
    };
  }

  public supplement(editionType: EditionType) {
    return (editionSubType: string): ResourseVo => {
      switch (editionType) {
        case "asset":
        default:
          return this.assetsService.supplement(editionSubType as AssetType);
      }
    };
  }
}
