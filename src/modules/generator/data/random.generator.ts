import { transformGeneraterEnumToRange } from "@/modules/creatorPlugin/composables/enumToRange";
import { sample, filter } from "lodash-es";
import { DATA } from "../../../composables/data";

const randomGenerator: GeneratorFunc<any, RandomGeneratorProps> = (_, data) => {
  const _data = DATA[data!.range];
  const range = (data?.needTransform ? transformGeneraterEnumToRange(_data as any) : _data) as Translator[];
  return sample(filter(range, data!.filter));
};

const randomGeneratorFormConfig: Autoform = [
  {
    type: "text",
    title: "根据条件随机生成",
  },
];

export const generator = { random: randomGenerator };
export const generatorForm = { random: randomGeneratorFormConfig };
