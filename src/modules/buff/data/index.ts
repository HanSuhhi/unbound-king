import { forEach } from 'lodash-es';
import * as AttributeBuffs from './attribute.buff';
import * as PersonalityBuffs from './personailaty.buff';

const parseBuffs = (buffs: Record<string, BuffStruct>) => {
  const returnData = new Map<string, BuffStruct[]>();
  forEach(buffs, buff => {
    if (!returnData.get(buff.from)) returnData.set(buff.from, []);
    returnData.get(buff.from)!.push(buff);
  });
  return returnData;
};

export const DATA_Buffs = {
  attribute: parseBuffs(AttributeBuffs),
  personality: parseBuffs(PersonalityBuffs)
};
