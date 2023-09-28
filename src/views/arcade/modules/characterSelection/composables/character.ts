import { useRequest } from "alova";
import type { Ref } from "vue";
import { i18nLangModel } from "#/composables/i18n/index";
import { useGlobalDialog } from "@/composables/components/globalDialog";
import { mountKeyCommand } from "@/composables/key/mountKeyCommand";
import { Keyboard } from "@/enums/keyboard.enum";
import { useStateStore } from "@/stores/state.store";
import { deleteCharacter } from "@/api/services/character";

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

export function key_delete_character(id: Ref<string>) {
  const { warning } = useGlobalDialog();
  const { send: deleteCharacterApi } = useRequest(() => deleteCharacter({
    params: {
      id: id.value
    }
  }), { immediate: false });

  const deleteCharacterEvent: KeyEvent = {
    key: Keyboard.d,
    translator: i18nLangModel.arcade.character_selection.remove_character,
    fn(isPressed) {
      if (!isPressed) {
        warning({
          title: i18nLangModel.arcade.character_selection.remove_character,
          text: i18nLangModel.arcade.character_selection.remove_confirm_text,
          confirm: deleteCharacterApi
        });
      }
    }
  };

  return mountKeyCommand(deleteCharacterEvent);
}
