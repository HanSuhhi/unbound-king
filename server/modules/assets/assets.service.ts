import { readFileSync, readdirSync } from "node:fs";
import { Injectable } from "@nestjs/common";
import type { IconResponse, IconVo } from "./vos/icon.vo";
import { resolveDistPath } from "@/composables/path/path";

@Injectable()
export class AssetsService {
  public getStandardIcons(): IconVo {
    const icons: Array<IconResponse> = [];
    const dirPath = "assets/standard/icons";
    const iconNames = readdirSync(resolveDistPath(dirPath));
    iconNames.forEach(iconName => icons.push([iconName.match(/^(.+)\.\w+$/)[1], readFileSync(resolveDistPath(`${dirPath}/${iconName}`))]));

    return { icons };
  }
}
