import { readFileSync, readdirSync } from "node:fs";
import { Injectable } from "@nestjs/common";
import type { Edition } from "../editions/edition-type";
import type { ResourseResponse, ResourseVo } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import { AssetType } from "./enums/asset-type.enum";
import { getNameFromFile } from "#/composables/tools/file";
import { resolveDistPath } from "@/composables/path/path";

@Injectable()
export class AssetsService {
  static readonly STANDARD_ICON_EDITION: Edition<AssetType> = [AssetType.StandardIcon, 1];

  private getStandardIcons(): ResourseVo {
    const icons: Array<ResourseResponse> = [];
    const dirPath = "assets/standard/icons";
    const iconNames = readdirSync(resolveDistPath(dirPath));
    iconNames.forEach(iconName => icons.push([getNameFromFile(iconName), readFileSync(resolveDistPath(`${dirPath}/${iconName}`)), ResourseType.Image]));

    return {
      edition: AssetsService.STANDARD_ICON_EDITION[1],
      editionName: AssetsService.STANDARD_ICON_EDITION[0],
      resourse: icons
    };
  }

  public supplement(subType: AssetType): ResourseVo {
    switch (subType) {
      case AssetType.StandardIcon:
      default:
        return this.getStandardIcons();
    }
  }
}
