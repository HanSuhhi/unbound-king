import { map } from "lodash";
import { DATA_Generator_Params } from "../../generator/data/index";
import { DATA } from "@/composables/data";
import { DATA_Generator_Forms } from "@/modules/generator/data";

const data: PluginStruct[] = map([...DATA.Attributes.values()], ({ translator }) => {
  return {
    translator,
    generator: "number",
    generatorForm: DATA_Generator_Forms.number,
    generatorParams: DATA_Generator_Params.number
  } as PluginStruct;
});

export default <CreatorPlugin>{
  translator: ["attribute-plugin", "属性插件"],
  belong: "character",
  description: "随机生成一份角色属性",
  icon: "thinking",
  data
};
