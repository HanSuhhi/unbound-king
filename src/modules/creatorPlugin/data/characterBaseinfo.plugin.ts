import { DATA_Generator_Forms } from "@/modules/generator/data";
import { transformGeneraterEnumToRange } from "../composables/enumToRange";

const data: PluginStruct[] = [
  {
    id: "gender",
    translator: { key: "gender", title: "性別" },
    generator: "random",
    generatorForm: DATA_Generator_Forms.random,
    generatorParams: <RandomGeneratorProps>{
      range: "DATA_Genders",
    },
  },
  {
    id: "chase",
    translator: { key: "chase", title: "追求" },
    generator: "random",
    generatorForm: DATA_Generator_Forms.random,
    generatorParams: <RandomGeneratorProps>{
      range: "DATA_Chases",
      needTransform: true,
    },
  },
  {
    id: "age",
    translator: { key: "age", title: "年龄" },
    generator: "random",
    generatorForm: DATA_Generator_Forms.random,
    generatorParams: <RandomGeneratorProps>{
      range: "DATA_Ages",
      needTransform: true,
    },
  },
];

export default <CreatorPlugin>{
  translator: {
    key: "character-baseinfo-plugin",
    title: "角色基础信息插件",
  },
  belong: "character",
  description: "生成人物追求与性别",
  icon: "mesasge",
  data,
};
