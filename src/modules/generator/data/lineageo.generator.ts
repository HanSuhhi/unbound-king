import { sample } from "lodash-es";
import { DATA } from "@/composables/data";

/**
 * @description always use this generator after destiny
 */
const lineageoGenerator: GeneratorFunc<any, {}> = (data) => {
  console.log("data: ", data);
  const destiny = data[0][1][0];
  const range = [...DATA.Lineageos.values()].filter(lineageo => lineageo.destiny === destiny).map(lineageo => [lineageo.id, lineageo.translator[1]]);
  return sample(range);
};

const lineageoGeneratorFormConfig: Autoform = [{
  key: "lineageo",
  type: "none",
  title: "根据条件随机生成"
}];

export const generator = { lineageo: lineageoGenerator };
export const generatorForm = { lineageo: lineageoGeneratorFormConfig };