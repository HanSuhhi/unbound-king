import type { SendHandler } from "alova";
import { useRequest } from "alova";
import type { Ref } from "vue";
import { i18nLangModel } from "#/composables/i18n/index";
import { useGlobalDialog } from "@/composables/components/globalDialog";
import { mountKeyCommand } from "@/composables/key/mountKeyCommand";
import { Keyboard } from "@/enums/keyboard.enum";
import { useStateStore } from "@/stores/state.store";
import type { ResponseType_GetList } from "@/api/services/character";
import { deleteCharacter } from "@/api/services/character";
import type { ResponseOriginData } from "#/composables/types/api";

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

export function key_delete_character(id: Ref<string>, getList: SendHandler<ResponseOriginData<ResponseType_GetList>>, index: Ref<number>) {
  const { warning } = useGlobalDialog();

  const { send: deleteCharacterApi, onSuccess } = useRequest(() => deleteCharacter({
    params: { id: id.value }
  }), { immediate: false });
  onSuccess(getList);
  onSuccess(() => index.value = 0);

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
