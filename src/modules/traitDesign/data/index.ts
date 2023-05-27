import { forEach, map } from "lodash";

export const DATA_Traits = new Map<string, Trait>();

map(import.meta.glob("./*.data.ts", { eager: true }), (module: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  forEach<Trait>(module.default, (trait) => {
    DATA_Traits.set(trait.id, trait);
  });
});
