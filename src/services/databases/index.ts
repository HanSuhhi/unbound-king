import { parseImportModule } from "@/composables/ci/importModule";

export const dbData = parseImportModule(import.meta.glob("./**/*.table.ts", { eager: true }), true);
