import { Injectable } from "@nestjs/common";
import { AssetsService } from "../assets/assets.service";
import type { EditionVo } from "./vos/edition.vo";
import type { Edition } from "./edition-type";

@Injectable()
export class EditionsService {
  private getAssetVersions(): Edition {
    return AssetsService.STANDARD_ICON_VERSION;
  }

  public getEditions(): EditionVo {
    return {
      asset: this.getAssetVersions()
    };
  }
}
