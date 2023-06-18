import { readdir, unlink } from "node:fs/promises";
import { resolve } from "node:path";

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
