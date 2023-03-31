import { DATA } from "@/composables/data";
import { DATA_Generator_Forms } from "@/modules/generator/data";
import { map } from "lodash-es";
import { DATA_Generator_Params } from "../../generator/data/index";

const data: PluginStruct[] = map(DATA['DATA_Attributes'], ({ translator }) => {
  return {
    translator,
    generator: 'number',
    generatorForm: DATA_Generator_Forms['number'],
    generatorParams: DATA_Generator_Params['number'],
  } as PluginStruct;
});

export default <CreatorPlugin>{
  translator: {
    key: "attribute-plugin",
    title: "属性插件",
  },
  belong: "character",
  description: "随机生成一份人物属性",
  icon: "list",
  data,
};