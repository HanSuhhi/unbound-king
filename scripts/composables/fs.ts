import { spawn } from "node:child_process";
import { readdir, unlink, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { isArray } from "lodash";

export async function clearFolder(folderPath: string): Promise<void> {
  const directory = await readdir(folderPath, { withFileTypes: true });

  await Promise.all(
    directory.map(async (file) => {
      const filePath = resolve(folderPath, file.name);
      if (file.isFile())
        await unlink(filePath);
    })
  );
}

export function writeFileToProject(path: string) {
  return (file: string | string[]) => {
    const injectString = `/** SCRIPT */\n${isArray(file) ? file.join("\n") : file}`;

    writeFile(path, injectString, (err) => {
      if (err) throw err;
    });
    spawn(process.platform.startsWith("win") ? "eslint.cmd" : "eslint", [path, "--fix"]).on("error", (err) => {
      throw err;
    });
    console.log("finished");
  };
}
