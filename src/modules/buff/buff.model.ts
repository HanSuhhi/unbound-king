import { DATA } from "@/composables/data";
import { defineUniqueId } from '../../composables/uniqueId';

type BuffProp = {
  character: Character,
  value: number
}

const getCharacterTarget = (character: Character, target: BuffStruct['target']): NumberModelValue => {
  let value: any = character;
  target.forEach(_t => {
    value = value[_t];
  });
  return value;
};

export const useBuff = (buffName: BuffName, { character, value }: BuffProp) => {
  const { target, buffType, description } = DATA['DATA_Buffs'][buffName];

  function main() {
    const modelValue = getCharacterTarget(character, target);
    switch (buffType) {
      case 'buff':
        modelValue.setBuffValue(buffName, [value, description]);
        break;

      default:
        break;
    }

    return buffName;
  }

  return { main, id: buffName };
};
