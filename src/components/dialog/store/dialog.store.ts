import { useKeyStore } from "@/stores/key.store";
import { useCsssDialog } from "csss-ui";
import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { defineDialogContent } from "../composables/dialogContent";

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

  const dialogContent = defineDialogContent(dialog);
  const close = ref<Function>(() => {});
  const enter = ref<Function>(() => {});

  return { COMP, dialog, dialogContent, enter, close };
});

export { useGlobalDialogStore };
