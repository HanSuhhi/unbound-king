import * as fg from "fast-glob";
import { kebabCase } from "lodash";
import { Prefix } from "#/composables/constant/url";

export function useClientRoutes() {
  const path = "src/modules/*/*.{tsx,vue}";
  const extraPaths = fg.sync("src/views/*/*.{tsx,vue}")
    .map((path) => {
      const name = path
        .match(/(.*)(\.vue|\.tsx)$/)[1]
        .match(/^.*?\/([^/]+)$/)[1];
      return `/${kebabCase(name)}`;
    });
  const ROUTES = fg.sync([path])
    .filter(path => /^.+(\.vue|\.tsx)$/.test(path))
    .map((path) => {
      const name = path
        .match(/(.*)(\.vue|\.tsx)$/)[1]
        .match(/^.*?\/([^/]+)$/)[1];
      return `/${Prefix.Client_Dev}/${kebabCase(name)}`;
    });

  return ["/", ...ROUTES, ...extraPaths];
}
