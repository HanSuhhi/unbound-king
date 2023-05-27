import { clone, map } from "lodash";
import { DATA } from "../../../composables/data";
import { DATA_Generator_Params } from "../../generator/data/index";
import { DATA_Generator_Forms } from "@/modules/generator/data";

const data: PluginStruct[] = map([...DATA.AttributeValues.values()], ({ translator }) => {
  if (translator[1].includes("生命上限")) {
    const generatorForm = DATA_Generator_Forms.paste;
    generatorForm[0].options!.range = map([...DATA.AttributeValues.values()], (attributeValue) => {
      const _translator = clone(attributeValue.translator);
      _translator[0] = attributeValue.translator[0];
      return _translator;
    });

    return {
      translator,
      generator: "paste",
      generatorForm,
      generatorParams: DATA_Generator_Params.paste
    };
  }

  return {
    translator,
    generator: "number",
    generatorForm: DATA_Generator_Forms.number,
    generatorParams: DATA_Generator_Params.number
  } as PluginStruct;
});

export default <CreatorPlugin>{
  translator: ["attribute-value-plugin", "属性值插件"],
  belong: "character",
  description: "通过配置，随机生成一份属性值表",
  icon: "character-param",
  data
};
