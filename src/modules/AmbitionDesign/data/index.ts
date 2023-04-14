import { map } from "lodash-es";

export const DATA_Ambitions = new Map<string, Ambition>();

map(import.meta.glob("./*.ambition.ts", { eager: true }), (module: ModuleArray<Ambition>) => {
  module.default.forEach((ambition) => {
    DATA_Ambitions.set(ambition.id, ambition);
  });
});
