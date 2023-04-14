import { clone, merge } from "lodash-es";
import { DATA_Generator_Params } from "../../generator/data/index";
import { DATA_Generator_Forms } from "@/modules/generator/data";

const data: PluginStruct[] = [
  {
    translator: ["familyName", "姓氏"],
    description: "",
    generator: "random",
    generatorForm: DATA_Generator_Forms.random,
    generatorParams: <RandomGeneratorProps>{
      range: "DATA_FamilyNames"
    }
  },
  {
    translator: ["firstname", "名辞"],
    description: "",
    generator: "firstname",
    generatorForm: DATA_Generator_Forms.firstname,
    generatorParams: DATA_Generator_Params.firstname
  },
  {
    translator: ["firstname-second", "名辞 2"],
    description: "当第一个名辞为单字时，有几率产生第二个单字，组成复名",
    generator: "firstname",
    generatorForm: DATA_Generator_Forms.firstname,
    generatorParams: merge(clone(DATA_Generator_Params.firstname), { second: true })
  }
];

export default <CreatorPlugin>{
  translator: ["character-name-plugin", "角色姓名插件"],
  belong: "character",
  description: "根据人物性别、追求生成姓名",
  icon: "write",
  data
};
