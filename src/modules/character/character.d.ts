type NumberModelValue = ReturnType<typeof import("./modelValue/number")['useNumberModelValue']>;

type Character = {
  'attribute-values': Dictionary<NumberModelValue>
  'attributes': Dictionary<NumberModelValue>
  'buffs': import("./buff/characterBuff.model").CharacterBuff
}