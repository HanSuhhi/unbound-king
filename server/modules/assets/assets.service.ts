import { readFileSync, readdirSync } from "node:fs";
import { Injectable } from "@nestjs/common";
import type { ResourseResponse } from "../editions/vos/resourse.vo";
import { ResourseType } from "../editions/enums/resourse-type.enum";
import { AssetType } from "./enums/asset-type.enum";
import { getNameFromFile } from "#/composables/tools/file";
import { resolveDistPath } from "@/composables/path/path";

@Injectable()
export class AssetsService {
  private getStandardIcons(): ResourseResponse[] {
    const icons: Array<ResourseResponse> = [];
    const dirPath = "assets/standard/icons";
    const iconNames = readdirSync(resolveDistPath(dirPath));
    iconNames.forEach(iconName => icons.push([
      readFileSync(resolveDistPath(`${dirPath}/${iconName}`)),
      ResourseType.Image,
      getNameFromFile(iconName)
    ]));

    return icons;
  }

  public supplement(subType: AssetType, key?: string): ResourseResponse[] {
    switch (subType) {
      case AssetType.StandardIcon:
      default:
        return this.getStandardIcons();
    }
  }
}
