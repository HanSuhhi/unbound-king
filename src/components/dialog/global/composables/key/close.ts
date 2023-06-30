import { throttle } from "lodash";
import { storeToRefs } from "pinia";
import type { Ref } from "vue";
import { nextTick } from "vue";
import { useKeyStore } from "@/stores/key.store";
import { mountKeyCommand } from "@/composables/key/mountKeyCommand";
import { i18nLangModel } from "#/composables/i18n/index";
import { dialogMessage } from "@/composables/components/globalDialog";
import { TRANSITION_DURATION } from "@/composables/constant/env";

export function key_closeDialog(dialogShow: Ref, delayShow: Ref) {
  const { freeze } = storeToRefs(useKeyStore());

  const close: KeyEvent = {
    key: "escape",
    translator: i18nLangModel.dialog.global.close,
    fn: throttle(async (isPressed) => {
      if (isPressed) return;
      dialogShow.value = false;
      setTimeout(() => {
        dialogMessage.value?._cancel();
        if (freeze) freeze.value = false;
      }, TRANSITION_DURATION);
      await nextTick(() => delayShow.value = false);
    }, TRANSITION_DURATION)
  };
  return [mountKeyCommand(close)];
}
