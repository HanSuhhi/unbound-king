import type { Ref } from "vue";
import { ref, watch, watchEffect } from "vue";

export enum CodeCanvasStatus {
  None,
  Changed,
  Copied,
}

export const useCodeCanvasStatus = (changed: Ref<Boolean>) => {
  const copied = ref(false);
  const status = ref<CodeCanvasStatus>(CodeCanvasStatus.None);

  watch(changed, (newBool) => {
    if (!newBool) return;
    copied.value = false;
    status.value = CodeCanvasStatus.Changed;
  });
  watch(copied, (newBool) => {
    if (!newBool) return;
    changed.value = false;
    status.value = CodeCanvasStatus.Copied;
  });

  return { copied, status };
};
