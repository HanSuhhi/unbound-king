import { i18nLangModel } from "#/composables/i18n/index";
import { mountKeyCommand } from "@/composables/key/mountKeyCommand";
import { Keyboard } from "@/enums/keyboard.enum";
import { useStateStore } from "@/stores/state.store";

export function key_regist_character() {
  const { stateToRegistCharacter } = useStateStore();

  const close: KeyEvent = {
    key: Keyboard.r,
    translator: i18nLangModel.arcade["character-selection"].registCharacterButton,
    fn(isPressed) {
      if (!isPressed) stateToRegistCharacter();
    }
  };
  return [mountKeyCommand(close)];
}
