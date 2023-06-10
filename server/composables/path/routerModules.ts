import { resolve } from "node:path";
import * as fg from "fast-glob";
import { capitalize } from "lodash";
import type { Routes } from "@nestjs/core";
import { Prefix } from "../../../composables/constant/url";
import { UPPER_DIRECTORY } from "./path";
import { getFilenameFromPath } from "#/composables/path/filenamePath";

export function defineRouterModulePaths(): Routes {
  const PATH = "server/**/*.module.ts";
  const EXCLUDE_MODULE_NAMES = ["app", "pages"];
  return fg.sync(PATH)
    .filter((modules) => {
      for (const exclude of EXCLUDE_MODULE_NAMES)
        if (modules.includes(exclude)) return false;
      return true;
    })
    .map((modulePath) => {
      const path = resolve(__dirname, UPPER_DIRECTORY, UPPER_DIRECTORY, UPPER_DIRECTORY, modulePath.replace("ts", "js"));
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const module = (require(path))[`${capitalize(getFilenameFromPath(modulePath))}Module`];
      return {
        path: Prefix.Server_1,
        module
      };
    });
}
