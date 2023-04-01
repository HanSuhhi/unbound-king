import * as AttributeBuffs from './attribute.buff';
import * as PersonalityBuffs from './personailaty.buff';
import { forEach, has } from 'lodash-es';

const parseBuffs = (buffs: Record<string, BuffStruct>) => {
  const returnData: Record<string, BuffStruct[]> = {};
  forEach(buffs, buff => {
    if (!has(returnData, buff.from)) returnData[buff.from] = [];
    returnData[buff.from].push(buff);
  });
  return returnData;
};

export const DATA_Buffs = {
  attribute: parseBuffs(AttributeBuffs),
  personality: parseBuffs(PersonalityBuffs)

};

export type BuffsKey = keyof typeof DATA_Buffs
