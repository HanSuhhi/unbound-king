import { Injectable } from "@nestjs/common";
import { AssetsService } from "../assets/assets.service";
import type { VersionVo } from "./vos/version.vo";

@Injectable()
export class VersionsService {
  private getAssetVersions(): Version {
    return AssetsService.STANDARD_ICON_VERSION;
  }

  public getVersions(): VersionVo {
    return {
      asset: this.getAssetVersions()
    };
  }
}
