import { filter, isArray, isMap, isObject, map, sample } from "lodash-es";
import { DATA } from "@/composables/data";

function getType(param: any): "Map" | "Object" | "Array" | "error" {
  if (isMap(param)) return "Map";
  if (isArray(param)) return "Array";
  if (isObject(param)) return "Object";
  return "error";
}

const randomGenerator: GeneratorFunc<any, RandomGeneratorProps> = (_, data) => {
  console.log("data.range: ", data.range);
  const range = DATA[data.range];
  const type = getType(range);
  const filteredItems = type === "Map"
    ? Array.from(range as unknown as Map<string, (TranslatorObj & NotBeGenerated)>)
      .filter(([_, item]) => !item.notBeGenerated)
      .map(([key, item]) => [key, item.translator[1]])
    : type === "Object"
      ? map(range, (rangeItem: Translator[] | (CanBeGenerated & TranslatorObj), key) => {
        if (isArray(rangeItem)) return [key, rangeItem[1]];
        if (rangeItem.canBeGenerated) return [key, rangeItem.translator[1]];
      })
      : range;

  return sample(filter(filteredItems, data?.filter));
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
