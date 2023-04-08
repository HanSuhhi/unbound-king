import { mountKeyCommand } from '@/composables/key/mountKeyCommand';
import { useKeyStore } from '@/stores/key.store';
import { throttle } from 'lodash-es';
import { storeToRefs } from 'pinia';
import type { Ref } from 'vue';
import { nextTick } from 'vue';
import { dialogMessage } from '../../../../composables/components/globalDialog';
import { animationDuration } from '../../../../composables/constant/env';

export const key_closeDialog = (dialogShow: Ref, delayShow: Ref) => {
  const { freeze } = storeToRefs(useKeyStore());

  const close: KeyEvent = {
    key: "escape",
    translator: ["close-global-dialog", "关闭弹窗"],
    fn: throttle((isPressed) => {
      if (isPressed) return;
      dialogShow.value = false;
      nextTick(() => delayShow.value = false);
      setTimeout(() => {
        dialogMessage.value?._cancel();
        if (freeze) freeze.value = false;
      }, animationDuration);
    }, animationDuration),
  };
  return [mountKeyCommand(close)];
};