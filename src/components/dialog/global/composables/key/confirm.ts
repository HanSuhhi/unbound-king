import { storeToRefs } from "pinia";
import { dialogMessage } from "@/composables/components/globalDialog";
import { i18nLangModel } from "#/composables/i18n/index";
import { mountKeyCommand } from "@/composables/experience/key/mountKeyCommand";
import { useKeyStore } from "@/stores/key.store";

export function key_confrim() {
  const { freeze } = storeToRefs(useKeyStore());

  const close: KeyEvent = {
    key: "enter",
    translator: i18nLangModel.dialog.global.confirm,
    fn(isPressed) {
      if (!isPressed) {
        dialogMessage.value?._confirm();
        if (freeze) freeze.value = false;
      }
    }
  };
  return [mountKeyCommand(close)];
}
