import { mountKeyCommand } from '@/composables/key/mountKeyCommand';
import { useKeyStore } from '@/stores/key.store';
import { storeToRefs } from 'pinia';
import { dialogMessage } from '../../../../composables/components/globalDialog';

export const key_confrim = () => {
  const { freeze } = storeToRefs(useKeyStore());

  const close: KeyEvent = {
    key: "enter",
    translator: ["confirm-dialog", "弹窗确定"],
    fn(isPressed) {
      if (!isPressed) {
        dialogMessage.value?._confirm();
        if (freeze) freeze.value = false;
      }
    },
  };
  return [mountKeyCommand(close)];
};