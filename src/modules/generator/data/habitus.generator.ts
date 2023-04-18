import { random } from "lodash-es";
import { DATA_Lineageo } from "@/modules/lineageoDesign/data";

const habitusGenerator: GeneratorFunc<any, HabitusGeneratorProps> = (data, { type }) => {
  const lineageoId = data[1][1][0];
  const lineageo = DATA_Lineageo.get(lineageoId);
  switch (type) {
    case "height": {
      const height = random(...lineageo!.provideHeight);
      return height;
    }
    case "weight":
    default: {
      const weight = random(...lineageo!.provideWeight);
      return weight;
    }
  }
};

const habitusGeneratorFormConfig: Autoform = [{
  key: "habitus",
  type: "none",
  title: "根据血统参数随机生成体型数据"
}];

export const generator = { habitus: habitusGenerator };
export const generatorForm = { habitus: habitusGeneratorFormConfig };
