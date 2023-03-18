import { getGeneratorForm, getGeneratorParams } from "@/modules/generator/data";
import { map } from "lodash-es";
import { DATA_AttrbuteValues } from "../../attributeValue/data/index";

const data: PluginStruct[] = map(DATA_AttrbuteValues, ({ id, translator, dataType }) => {
  return {
    id: id,
    translator: translator,
    generator: dataType,
    generatorForm: getGeneratorForm("number"),
    generatorParams: getGeneratorParams("number"),
  } as PluginStruct;
});

export default <CreatorPlugin>{
  translator: {
    key: "attribute-value-plugin",
    title: "属性值插件",
  },
  belong: "character",
  description: "通过配置，随机生成一份属性值表",
  icon: "character-param",
  data,
};
