import { Injectable } from "@nestjs/common";
import { AssetsService } from "../assets/assets.service";
import { AssetType } from "../assets/enums/asset-type.enum";
import type { EditionVo } from "./vos/edition.vo";
import type { Edition, EditionType } from "./edition-type";

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

  public supplement(editionType: EditionType) {
    switch (editionType) {
      case AssetType.StandardIcon:
      default:
        return this.assetsService.supplement(editionType);
    }
  }
}
