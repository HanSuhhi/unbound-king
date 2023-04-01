type BuffProp = {
  character: Character,
  baseValue?: number
}

const getCharacterTarget = (character: Character, target: BuffStruct['target']): NumberModelValue => {
  let value: any = character;
  target.forEach(_t => {
    value = value[_t];
  });
  return value;
};

const getBuffName = (from: BuffStruct['from'], target: BuffStruct['target']) => {
  return `${from}_${target.slice(1).join("_")}`;
};

export const useBuff = ({ target, from, buffType, description, value }: BuffStruct, { character, baseValue = 0 }: BuffProp) => {
  const buffName = getBuffName(from, target);

  function main() {
    const modelValue = getCharacterTarget(character, target);
    switch (buffType) {
      case 'buff':
        const { scale = 1, increase = 0 } = value!;
        const finalValue = scale * baseValue + increase;
        modelValue.setBuffValue(buffName, [finalValue, description]);
        break;

      default:
        break;
    }

    return buffName;
  }

  return { main, id: buffName };
};
