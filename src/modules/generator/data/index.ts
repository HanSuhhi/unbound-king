import { map, merge } from "lodash-es";

export const DATA_Generators: IdValue<GeneratorFunc<any>> = {};

map(import.meta.glob("./*.generator.ts", { eager: true }), (generator: any) => {
  merge(DATA_Generators, generator.default);
});
