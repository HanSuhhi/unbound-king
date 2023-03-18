import { clone, map, merge } from "lodash-es";

export const DATA_Generators: IdValue<GeneratorFunc<any>> = {};
export const DATA_Generator_Forms: IdValue<Autoform> = {};
export const DATA_Generator_Params: IdValue<Parameters<GeneratorFunc<any>>> = {};

map(import.meta.glob("./*.generator.ts", { eager: true }), ({ generator, generatorForm, generatorParams }: any) => {
  merge(DATA_Generators, generator);
  merge(DATA_Generator_Forms, generatorForm);
  merge(DATA_Generator_Params, generatorParams);
});

export const getGeneratorForm = (key: string) => DATA_Generator_Forms[key];
export const getGeneratorParams = (key: string) => clone(DATA_Generator_Params[key]);
