import { forEach, map } from "lodash-es";

export const DATA_Traits = new Map<string, Trait>();

map(import.meta.glob("./*.data.ts", { eager: true }), (module: any) => {
  forEach<Trait>(module.default, (trait) => {
    DATA_Traits.set(trait.id, trait);
  });
});
