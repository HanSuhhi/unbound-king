import { useKeyStore } from "@/stores/key.store";
import { onMounted, watch } from 'vue';
import { dialogMessage } from '../../../composables/components/globalDialog';

export const useGlobalDialogKey = () => {
  const { addKeyCommand, uninstallKeyCommand } = useKeyStore();

  const close: KeyEvent = {
    translator: { key: "escape", title: "关闭弹窗" },
    fn(isPressed) {
      if (!isPressed) dialogMessage.value?._cancel();
    },
  };

  watch(dialogMessage, show => {
    show ? addKeyCommand(close) : uninstallKeyCommand(close.translator.key);
  });

};