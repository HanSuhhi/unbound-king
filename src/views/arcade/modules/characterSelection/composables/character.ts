import type { useCharacterList } from "./form";
import { i18nLangModel } from "#/composables/i18n/index";
import { useGlobalDialog } from "@/composables/components/globalDialog";
import { mountKeyCommand } from "@/composables/experience/key/mountKeyCommand";
import { Keyboard } from "@/enums/keyboard.enum";
import { useStateStore } from "@/stores/state.store";
import { useCharacterDb } from "@/services/databases/character/character.service";
import { useFunctionListener } from "@/composables/plus/listener";

export function key_regist_character() {
  const { stateToRegistCharacter } = useStateStore();

  const registCharacter: KeyEvent = {
    key: Keyboard.r,
    translator: i18nLangModel.arcade.character_selection.regist_character_button,
    fn(isPressed) {
      if (!isPressed) stateToRegistCharacter();
    }
  };
  return mountKeyCommand(registCharacter);
}

export function key_delete_character({ list, index, choosedCharacterId }: Awaited<ReturnType<typeof useCharacterList>>) {
  const { warning } = useGlobalDialog();
  const { queryUserCharacters, removeById } = useCharacterDb();
  const { run: deleteCharacter, final } = useFunctionListener(() => removeById(choosedCharacterId.value));

  final(async () => list.value = await queryUserCharacters());
  final(() => index.value = 0);

  const deleteCharacterEvent: KeyEvent = {
    key: Keyboard.d,
    translator: i18nLangModel.arcade.character_selection.remove_character,
    fn(isPressed) {
      if (isPressed) return;
      warning({
        title: i18nLangModel.arcade.character_selection.remove_character,
        text: i18nLangModel.arcade.character_selection.remove_confirm_text,
        confirm: deleteCharacter
      });
    }
  };

  return mountKeyCommand(deleteCharacterEvent);
}

export function key_decide_character() {
  const { stateToMainGame } = useStateStore();

  const startGame: KeyEvent = {
    key: Keyboard.enter,
    translator: i18nLangModel.arcade.character_selection.decide_character,
    fn(isPressed) {
      if (!isPressed) stateToMainGame();
    }
  };

  return startGame;
}
