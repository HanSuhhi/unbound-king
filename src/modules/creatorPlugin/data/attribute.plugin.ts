import { DATA } from "@/composables/data";
import { DATA_Generator_Forms } from "@/modules/generator/data";
import { map } from "lodash-es";
import { DATA_Generator_Params } from "../../generator/data/index";

const data: PluginStruct[] = map(DATA['DATA_Attributes'], ({ translator, }) => {
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
