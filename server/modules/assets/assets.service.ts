import { readFileSync, readdirSync } from "node:fs";
import { Injectable } from "@nestjs/common";
import type { Edition } from "../editions/edition-type";
import type { IconResponse, IconVo } from "./vos/icon.vo";
import { getNameFromFile } from "#/composables/tools/file";
import { resolveDistPath } from "@/composables/path/path";

@Injectable()
export class AssetsService {
  static readonly STANDARD_ICON_VERSION: Edition = ["BEyA1XPyO4vf", 1];

  public getStandardIcons(): IconVo {
    const icons: Array<IconResponse> = [];
    const dirPath = "assets/standard/icons";
    const iconNames = readdirSync(resolveDistPath(dirPath));
    iconNames.forEach(iconName => icons.push([getNameFromFile(iconName), readFileSync(resolveDistPath(`${dirPath}/${iconName}`))]));

    return {
      edition: AssetsService.STANDARD_ICON_VERSION[1],
      editionName: AssetsService.STANDARD_ICON_VERSION[0],
      icons
    };
  }
}
