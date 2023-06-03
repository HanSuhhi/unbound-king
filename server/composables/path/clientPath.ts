import * as fg from "fast-glob";
import { kebabCase } from "lodash";
import { CLIENT_SECOND_PREFIX } from "../../../composables/constant/url";

export function useClientRoutes() {
  const path = "src/modules/*/*.{tsx,vue}";
  const extraPaths = ["/", "/auth", "/content"];
  const ROUTES = fg.sync([path])
    .filter(path => /^.+(\.vue|\.tsx)$/.test(path))
    .map((path) => {
      const name = path
        .match(/(.*)(\.vue|\.tsx)$/)[1]
        .match(/^.*?\/([^/]+)$/)[1];
      return `/${CLIENT_SECOND_PREFIX}/${kebabCase(name)}`;
    });

  return [...ROUTES, ...extraPaths];
}
