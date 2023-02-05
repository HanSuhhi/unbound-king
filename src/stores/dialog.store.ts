import { useKeyStore } from "@/stores/key.store";
import { useCsssDialog } from "csss-ui";
import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";

const useGlobalDialogStore = defineStore("global-dialog", () => {
  const { COMP, state } = useCsssDialog({});

  const { freeze: freezeKeyCommands } = storeToRefs(useKeyStore());

  const _toShowDialog = () => {
    freezeKeyCommands.value = true;
    state.value.show = true;
  };
  const _toHideDialog = () => {
    state.value.show = false;
    freezeKeyCommands.value = false;
  };

  const dialog = computed({
    get: () => state.value?.show,
    set(readyToShowDialog) {
      if (readyToShowDialog) _toShowDialog();
      else _toHideDialog();
    },
  });

  const _dialogContent = ref("");
  const dialogContent = computed({
    get: () => _dialogContent.value,
    set: (message) => {
      _dialogContent.value = message;
      dialog.value = true;
    },
  });

  return { COMP, dialog, dialogContent };
});

export { useGlobalDialogStore };
