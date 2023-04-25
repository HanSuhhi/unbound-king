import { random, sample } from "lodash-es";
import { compareIgnoreCase } from "../../../composables/util/string";
import { DATA } from "@/composables/data";

const firstnameGenerator: GeneratorFunc<any, FirstnameGeneratorProps> = (data, paramsm, { pastData }) => {
  const range = DATA.FirstNames.filter((firstname) => {
    if (!firstname.chase && !firstname.gender) return true;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    if (firstname.chase && !compareIgnoreCase(firstname.chase, pastData.chase[0])) return false;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    if (firstname.gender && !compareIgnoreCase(firstname.gender, pastData.gender[0])) return false;
    return true;
  });

  if (!paramsm?.second) return sample(range)?.name;
  const lastFirstname = data[data.length - 1][1].toString();
  if (lastFirstname.length !== 1) return "";
  if (random()) {
    let secondText = "";
    while (secondText.length !== 1 && secondText !== lastFirstname)
      secondText = sample(range)!.name;

    return secondText;
  }
  return "";
};

const firstnameGeneratorFormConfig: Autoform = [{
  key: "firstname",
  type: "none",
  title: "根据条件随机生成"
}];

const firstnameGeneratorParams: FirstnameGeneratorProps = {
  needInject: ["character-baseinfo-plugin"]
};

export const generator = { firstname: firstnameGenerator };
export const generatorForm = { firstname: firstnameGeneratorFormConfig };
export const generatorParams = { firstname: firstnameGeneratorParams };
