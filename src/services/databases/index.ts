import type { ITable } from "jsstore";
import { map } from "lodash-es";

export const tables = map(import.meta.glob<Record<"default", ITable>>("./*.db.ts", { eager: true }), db => db.default);
