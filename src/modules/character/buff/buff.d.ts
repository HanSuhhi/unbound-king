type BuffStruct = {
  icon?: GameIcon,
  show?: boolean,
  translator: Translator,
  description: string,
  effect: (character: Character) => void,
  removeEffect: (character: Character, id?: string) => void
}