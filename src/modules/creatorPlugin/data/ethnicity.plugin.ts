import { DATA_Generator_Forms } from "@/modules/generator/data";

const data: PluginStruct[] = [
  {
    translator: ["destiny", "种族"],
    description: "",
    generator: "random",
    generatorForm: DATA_Generator_Forms.random,
    generatorParams: <RandomGeneratorProps>{
      range: "Destinies"
    }
  },
  {
    translator: ["lineageo", "血统"],
    description: "仅获得对应种族的血统🙌",
    generator: "lineageo",
    generatorForm: DATA_Generator_Forms.lineageo,
    generatorParams: <RandomGeneratorProps>{
      range: "Lineageos"
    }
  },
  {
    translator: ["height", "身高"],
    generator: "habitus",
    generatorForm: DATA_Generator_Forms.habitus,
    generatorParams: {
      type: "height"
    }
  },
  {
    translator: ["weight", "体重"],
    generator: "habitus",
    generatorForm: DATA_Generator_Forms.habitus,
    generatorParams: {
      type: "weight"
    }
  }
];

export default <CreatorPlugin>{
  translator: ["ethnicity-plugin", "族裔插件"],
  belong: "character",
  description: "随机生成角色的种族、血统",
  icon: "thinking",
  data
};
