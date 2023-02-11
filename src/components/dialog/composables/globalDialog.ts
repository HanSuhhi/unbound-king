import { useGlobalDialogStore } from "@/stores/dialog.store";
import { useKeyStore } from "@/stores/key.store";
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";

export const useGlobalDialog = () => {
  const { addKeyCommand } = useKeyStore();
  const { dialog } = storeToRefs(useGlobalDialogStore());

  const closeDialog = () => {
    dialog.value = false;
  };

  const closeWindow = () => {
    window.close();
  };

  watch(dialog, (isShow) => {
    if (isShow) {
      addKeyCommand({
        key: "escape",
        fn: (isPressed: boolean) => {
          if (!isPressed) closeDialog();
        },
      });
      addKeyCommand({
        key: "enter",
        fn(isPressed) {
          if (!isPressed) closeWindow();
        },
      });
    }
  });

  return {
    closeDialog,
    closeWindow,
  };
};
