import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { getNameFromFile } from "../composables/tools/file";
import { writeFileToProject } from "./composables/fs";

function createStandardIconTypeString() {
  const dirPath = resolve("server", "assets", "standard", "icons");
  const typeContent = readdirSync(dirPath).map(path => `"${getNameFromFile(path)}"`).join(" | ");
  return `export type StandardGameIconKey = ${typeContent}`;
}

function writeStandardIconType() {
  const filePath = resolve("server", "type.ts");
  const file = [createStandardIconTypeString()];

  writeFileToProject(filePath)(file);
}
writeStandardIconType();
