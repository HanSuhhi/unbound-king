import { map, merge } from "lodash-es";

export const DATA_GameIcons: Record<string, GameIcon> = {};

map(import.meta.glob("./*.data.ts", { eager: true }), (module: any) => {
  merge(DATA_GameIcons, module.default);
});
