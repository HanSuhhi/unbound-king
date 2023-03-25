import { sample } from "lodash-es";

const randomGenerator: GeneratorFunc<any, RandomGeneratorProps> = (_, data) => sample(data?.range);

const randomGeneratorFormConfig: Autoform = [
  {
    type: "text",
    title: "随机生成",
  },
];

export const generator = { random: randomGenerator };
export const generatorForm = { random: randomGeneratorFormConfig };
