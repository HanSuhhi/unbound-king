import { map, merge } from "lodash-es";

export const DATA_Ambitions: Dictionary<Ambition> = {};

map(import.meta.glob("./*.ambition.ts", { eager: true }), (module: any) => {
  merge(DATA_Ambitions, module.default);
});
