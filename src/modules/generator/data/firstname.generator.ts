import { random, sample } from 'lodash-es';
import { DATA_FirstNames } from '../../nameDesign/data/name.data';
import { compareIgnoreCase } from '../../../composables/util/string';

const firstnameGenerator: GeneratorFunc<any, FirstnameGeneratorProps> = (data, paramsm, { pastData }) => {
  console.log('pastData: ', pastData);
  const range = DATA_FirstNames.filter(firstname => {
    if (!firstname.chase && !firstname.gender) return true;
    if (firstname.chase && !compareIgnoreCase(firstname.chase, pastData.chase[0])) return false;
    if (firstname.gender && !compareIgnoreCase(firstname.gender, pastData.gender[0])) return false;
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
  key: "firstname",
  type: "text",
  title: "根据条件随机生成",
}];

const firstnameGeneratorParams: FirstnameGeneratorProps = {
  needInject: ['character-baseinfo-plugin']
};

export const generator = { firstname: firstnameGenerator };
export const generatorForm = { firstname: firstnameGeneratorFormConfig };
export const generatorParams = { firstname: firstnameGeneratorParams };
