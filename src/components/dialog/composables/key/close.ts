import { throttle } from "lodash-es";
import { storeToRefs } from "pinia";
import type { Ref } from "vue";
import { nextTick } from "vue";
import { dialogMessage } from "../../../../composables/components/globalDialog";
import { animationDuration } from "../../../../composables/constant/env";
import { useKeyStore } from "@/stores/key.store";
import { mountKeyCommand } from "@/composables/key/mountKeyCommand";

export function key_closeDialog(dialogShow: Ref, delayShow: Ref) {
  const { freeze } = storeToRefs(useKeyStore());

  const close: KeyEvent = {
    key: "escape",
    translator: ["close-global-dialog", "关闭弹窗"],
    fn: throttle(async (isPressed) => {
      if (isPressed) return;
      dialogShow.value = false;
      setTimeout(() => {
        dialogMessage.value?._cancel();
        if (freeze) freeze.value = false;
      }, animationDuration);
      await nextTick(() => delayShow.value = false);
    }, animationDuration)
  };
  return [mountKeyCommand(close)];
}
