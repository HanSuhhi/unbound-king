import type { ComputedRef, Ref } from "vue";
import { provide, ref, watch } from "vue";

export function applyDataToModule(watchResources: Ref, codeTemplate: ComputedRef<string[]>) {
  const code = ref((codeTemplate.value.join("")));
  const changed = ref<boolean>(false);

  watch(
    watchResources,
    () => {
      code.value = (codeTemplate.value.join(""));
    },
    { deep: true }
  );

  provide("changed", changed);
  provide("data", watchResources);

  return { code };
}
