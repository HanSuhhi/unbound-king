import { useGlobalDialogStore } from "@/components/dialog/store/dialog.store";
import { useKeyStore } from "@/stores/key.store";
import { storeToRefs } from "pinia";
import { watch } from "vue";

export const useGlobalDialog = () => {
  const { addKeyCommand, uninstallKeyCommand } = useKeyStore();
  const { dialog, close: closeCallback, enter: enterCallback } = storeToRefs(useGlobalDialogStore());

  const closeDialog = () => {
    dialog.value = false;
  };

  const close = () => {
    closeCallback.value();
    closeDialog();
  };

  const enter = () => {
    enterCallback.value();
    closeDialog();
  };

  watch(dialog, (isShow) => {
    if (isShow) {
      addKeyCommand({
        key: "escape",
        fn: (isPressed: boolean) => {
          if (!isPressed) close();
        },
      });
      addKeyCommand({
        key: "enter",
        fn(isPressed) {
          if (!isPressed) enter();
        },
      });
    }
  });

  return {
    close,
    enter,
  };
};
