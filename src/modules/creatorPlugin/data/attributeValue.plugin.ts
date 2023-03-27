import { DATA_AttributeValues } from "@/modules/attributeValue/data";
import { DATA_Generator_Forms } from "@/modules/generator/data";
import { clone, map } from "lodash-es";
import { DATA_Generator_Params } from "../../generator/data/index";
import { DATA } from '../../../composables/data';

const data: PluginStruct[] = map(DATA['DATA_AttributeValues'], ({ translator }) => {
  if (translator.title.includes("生命上限")) {
    const generatorForm = DATA_Generator_Forms.paste;
    generatorForm[0].options!.range = map(DATA_AttributeValues, (attributeValue) => {
      const _translator = clone(attributeValue.translator);
      _translator.key = attributeValue.translator.key;
      return _translator;
    });

    return {
      translator,
      generator: "paste",
      generatorForm,
      generatorParams: DATA_Generator_Params.paste,
    };
  }

  return {
    translator,
    generator: 'number',
    generatorForm: DATA_Generator_Forms['number'],
    generatorParams: DATA_Generator_Params['number'],
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
