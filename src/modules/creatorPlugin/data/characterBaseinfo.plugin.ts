import { DATA_Generator_Forms } from "@/modules/generator/data";

const data: PluginStruct[] = [
  {
    translator: { key: "gender", title: "性別" },
    description: "",
    generator: "random",
    generatorForm: DATA_Generator_Forms.random,
    generatorParams: <RandomGeneratorProps>{
      range: "DATA_Genders",
    },
  },
  {
    translator: { key: "chase", title: "追求" },
    description: "角色毕生的追求，在诸多方面对角色产生影响",
    generator: "random",
    generatorForm: DATA_Generator_Forms.random,
    generatorParams: <RandomGeneratorProps>{
      range: "DATA_Chases",
      needTransform: true,
    },
  },
  {
    translator: { key: "age", title: "年龄" },
    description: "",
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
