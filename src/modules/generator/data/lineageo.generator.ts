import { sample } from "lodash-es";
import { DATA_Lineageo } from "@/modules/lineageoDesign/data";

/**
 * @description always use this generator after destiny
 */
const lineageoGenerator: GeneratorFunc<any, LineageoGeneratorProps> = (data) => {
  const destiny = data[0][1][0];
  const range = [...DATA_Lineageo.values()].filter(lineageo => lineageo.destiny === destiny).map(lineageo => lineageo.translator);
  return sample(range);
};

const lineageoGeneratorFormConfig: Autoform = [{
  key: "lineageo",
  type: "none",
  title: "根据条件随机生成"
}];

export const generator = { lineageo: lineageoGenerator };
export const generatorForm = { lineageo: lineageoGeneratorFormConfig };
