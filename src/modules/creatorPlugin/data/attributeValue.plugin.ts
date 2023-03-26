import { DATA_AttributeValues } from "@/modules/attributeValue/data";
import { DATA_Generator_Forms } from "@/modules/generator/data";
import { clone, map } from "lodash-es";
import { DATA_Generator_Params } from "../../generator/data/index";

const data: PluginStruct[] = map(DATA_AttributeValues, ({ id, translator, dataType }) => {
  if (translator.title.includes("生命上限")) {
    const generatorForm = DATA_Generator_Forms.paste;
    generatorForm[0].options!.range = map(DATA_AttributeValues, (attributeValue) => {
      const _translator = clone(attributeValue.translator);
      _translator.key = attributeValue.id;
      return _translator;
    });

    return {
      id,
      translator,
      generator: "paste",
      generatorForm,
      generatorParams: DATA_Generator_Params.paste,
    };
  }

  return {
    id,
    translator,
    generator: dataType,
    generatorForm: DATA_Generator_Forms.number,
    generatorParams: DATA_Generator_Params.number,
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
