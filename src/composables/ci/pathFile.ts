import { getFilenameFromPath } from "#/composables/path/filenamePath";

export function updateFilenameFromViteGlob(_: any, path: string): string {
  return getFilenameFromPath(path);
}
