import { DATA_Generator_Forms } from "@/modules/generator/data";
import { DATA_Choose, DATA_Gender } from "@/enums/character.enum";

const data: PluginStruct[] = [
  {
    id: "gender",
    translator: { key: "gender", title: "性別" },
    generator: "random",
    generatorForm: DATA_Generator_Forms.random,
    generatorParams: <RandomGeneratorProps>{
      range: DATA_Gender,
    },
  },
  {
    id: "choose",
    translator: { key: "choose", title: "笃信" },
    generator: "random",
    generatorForm: DATA_Generator_Forms.random,
    generatorParams: <RandomGeneratorProps>{
      range: DATA_Choose,
    },
  },
];

export default <CreatorPlugin>{
  translator: {
    key: "character-baseinfo-plugin",
    title: "角色基础信息插件",
  },
  belong: "character",
  description: "生成人物笃信与性别",
  icon: "mesasge",
  data,
};
