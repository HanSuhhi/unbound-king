import { fromPairs, map } from "lodash-es";
import type { Ref } from "vue";
import { NumberAttribute } from '../numberAttribute/numberAttribute.model';

const convertToObj = (data: ReturnStruct[]) => fromPairs(map(data, ([_, num, str]) => [str, new NumberAttribute(Number(num))]));

export const bindCharacterAttributeValue = (data: ReturnStruct[], character: Ref<Character>) => {
  character.value['attribute-values'] = convertToObj(data);


};