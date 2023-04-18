import { clone, map, merge } from "lodash-es";

export const DATA_Generators: Dictionary<GeneratorFunc<any, any>> = {};
export const DATA_Generator_Forms: Dictionary<Autoform> = {};
export const DATA_Generator_Params: Dictionary<Parameters<GeneratorFunc<any, any>>> = {};

map(import.meta.glob("./*.generator.ts", { eager: true }), ({ generator, generatorForm, generatorParams }: any) => {
  merge(DATA_Generators, generator);
  merge(DATA_Generator_Forms, generatorForm);
  merge(DATA_Generator_Params, generatorParams);
});

export function getGeneratorForm(key: string) {
  return DATA_Generator_Forms[key];
}
export function getGeneratorParams(key: string) {
  return clone(DATA_Generator_Params[key]);
}
