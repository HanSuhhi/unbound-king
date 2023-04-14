import { filter, sample } from "lodash-es";
import { DATA } from "../../../composables/data";
import { transformGeneraterEnumToRange } from "@/modules/creatorPlugin/composables/enumToRange";

const randomGenerator: GeneratorFunc<any, RandomGeneratorProps> = (_, data) => {
  const _data = DATA[data!.range];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const range = (data?.needTransform ? transformGeneraterEnumToRange(_data as any) : _data) as string[] | Translator[];
  return sample(filter(range, data!.filter));
};

const randomGeneratorFormConfig: Autoform = [
  {
    key: "name",
    type: "none",
    title: "根据条件随机生成"
  }
];

export const generator = { random: randomGenerator };
export const generatorForm = { random: randomGeneratorFormConfig };
