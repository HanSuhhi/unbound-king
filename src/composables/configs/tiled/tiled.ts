import type json from "@/views/arcade/modules/mainGame/maps/Carp_Village_Tavern_Cellar/json/Carp_Village_Tavern_Cellar.json";

/**
 * @example ..\/TileMap\/RPG_Wall.tsx => RPG_Wall
 */
function getFileName(filePath: string): string {
  const splitPath = filePath.split("/");
  const fileNameWithExtension = splitPath[splitPath.length - 1];
  const fileName = fileNameWithExtension.split(".")[0];
  return fileName;
}

export function parseTiledJson({ tilesets }: typeof json) {
  const tileMaps = tilesets.map(({ source }) => getFileName(source));
}
