import { DATA_Generator_Forms } from "@/modules/generator/data";
import { DATA_FamilyNames } from "../../nameDesign/data/name.data";

const data: PluginStruct[] = [
  {
    id: "familyName",
    translator: { key: "familyName", title: "姓氏" },
    generator: "random",
    generatorForm: DATA_Generator_Forms.random,
    generatorParams: <RandomGeneratorProps>{
      range: DATA_FamilyNames,
    },
  },
];

export default <CreatorPlugin>{
  translator: {
    key: "character-name-plugin",
    title: "角色姓名插件",
  },
  belong: "character",
  description: "根据人物性别、追求生成姓名",
  icon: "write",
  data,
};
