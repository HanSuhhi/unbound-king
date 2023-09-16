import { existsSync, mkdirSync, writeFileSync } from "node:fs";

export function mkPathDir(paths: string) {
  const path = paths.split("\\");
  let beginPath = path[0];
  const currentPath: any = {};
  for (let i = 1; i < path.length; i++) {
    if (!currentPath[beginPath] && !existsSync(beginPath)) {
      currentPath[beginPath] = true;
      mkdirSync(beginPath);
    }
    beginPath = `${beginPath}/${path[i]}`;
  }
  writeFileSync(paths, "");
}
