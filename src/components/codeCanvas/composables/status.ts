import type { Ref } from "vue";
import { inject, ref, watch } from "vue";

export enum CodeCanvasStatus {
  None,
  Changed,
  Copied
}

export function useCodeCanvasStatus() {
  const changed = inject<Ref<boolean>>("changed")!;

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
}
