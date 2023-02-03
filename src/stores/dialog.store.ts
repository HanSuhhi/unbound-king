import { useCsssButton, useCsssDialog } from "csss-ui";
import { defineStore, storeToRefs } from "pinia";
import { useKeyStore } from "@/stores/key.store";
import { onMounted, computed, ref } from "vue";

const useGlobalDialogStore = defineStore("global-dialog", () => {
  const { COMP, state } = useCsssDialog({});
  const { COMP: CancelButton } = useCsssButton({
    style: {
      property: {
        "--bg-color-main": "var(--gray)",
        "--bg-color-sub": "var(--gray-bright-2)",
      },
    },
  });

  const { freeze: freezeKeyCommands } = storeToRefs(useKeyStore());

  const toShowDialog = () => {
    freezeKeyCommands.value = true;
    state.value.show = true;
  };
  const toHideDialog = () => {
    state.value.show = false;
    freezeKeyCommands.value = false;
  };

  const _dialog = ref(false);
  const showDialog = computed({
    get: () => _dialog.value,
    set(readyToShowDialog) {
      if (readyToShowDialog) toShowDialog();
      else toHideDialog();
    },
  });
  return { COMP, showDialog, CancelButton };
});

export { useGlobalDialogStore };
