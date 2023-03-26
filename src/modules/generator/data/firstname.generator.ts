import { random, sample } from 'lodash-es';
import { DATA_FirstNames } from '../../nameDesign/data/name.data';
import { compareIgnoreCase } from '../../../composables/util/string';

const firstnameGenerator: GeneratorFunc<any, FirstnameGeneratorProps> = (data, paramsm, { pastData }) => {

  // const range = DATA_FirstNames.filter(firstname => {
  //   if (!firstname.chase && !firstname.gender) return true;
  //   if (firstname.chase && !firstname.gender) return compareIgnoreCase(firstname.chase, pastData.chase.key);
  //   if (!firstname.chase && firstname.gender) return compareIgnoreCase(firstname.gender, pastData.gender.key);
  //   if (firstname.chase && firstname.gender) return compareIgnoreCase(firstname.gender, pastData.gender.key) && compareIgnoreCase(firstname.chase, pastData.chase.key);
  // });
  const range = DATA_FirstNames.filter(firstname => {
    if (!firstname.chase && !firstname.gender) return true;
    if (firstname.chase && !compareIgnoreCase(firstname.chase, pastData.chase.key)) return false;
    if (firstname.gender && !compareIgnoreCase(firstname.gender, pastData.gender.key)) return false;
    return true;
  });


  if (!paramsm?.second) return sample(range)?.name;
  const lastFirstname = data[data.length - 1][1].toString();
  if (lastFirstname.length !== 1) return '';
  if (random()) {
    let secondText = '';
    while (secondText.length !== 1 && secondText !== lastFirstname) {
      secondText = sample(range)?.name!;
    }
    return secondText;
  }
  return '';
};

const firstnameGeneratorFormConfig: Autoform = [{
  type: "text",
  title: "根据条件随机生成",
}];

const firstnameGeneratorParams: FirstnameGeneratorProps = {
  needInject: ['character-baseinfo-plugin']
};

export const generator = { firstname: firstnameGenerator };
export const generatorForm = { firstname: firstnameGeneratorFormConfig };
export const generatorParams = { firstname: firstnameGeneratorParams };
