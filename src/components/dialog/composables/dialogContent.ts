import type { WritableComputedRef } from "vue";
import { computed, ref } from "vue";

export const defineDialogContent = (dialog: WritableComputedRef<boolean>) => {
  const _dialogContent = ref("");
  const dialogContent = computed({
    get: () => _dialogContent.value,
    set: (message) => {
      _dialogContent.value = message;
      dialog.value = true;
    },
  });

  return dialogContent;
};
