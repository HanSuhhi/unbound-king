import { useCsssDialog } from "csss-ui";
import { defineStore, storeToRefs } from "pinia";
import { useKeyStore } from "@/stores/key.store";
import { onMounted, computed, ref } from "vue";

const useGlobalDialogStore = defineStore("global-dialog", () => {
  const { COMP, state } = useCsssDialog({});
  const { freeze: freezeKeyCommands } = storeToRefs(useKeyStore());
  const toShowDialog = () => {
    console.log("asdasdasd");

    freezeKeyCommands.value = true;
    state.value.show = true;
  };
  const toHideDialog = () => {
    state.value.show = false;
    freezeKeyCommands.value = false;
  };
  onMounted(() => {
    COMP;
  });

  const _dialog = ref(false);
  const showDialog = computed({
    get: () => _dialog.value,
    set(readyToShowDialog) {
      console.log("comeheere ");

      if (readyToShowDialog) toShowDialog();
      else toHideDialog();
    },
  });

  const toggle = () => (state.value.show = !state.value.show);

  return { COMP, showDialog };
});

export { useGlobalDialogStore };
