import type { ComputedRef, Ref } from "vue";
import { provide, ref, watch } from "vue";
import { formatCodeString } from "../ci/codeString";

export const applyDataToModule = (watchResources: Ref, codeTemplate: ComputedRef<string[]>) => {
  const code = ref(formatCodeString(...codeTemplate.value));
  const changed = ref<boolean>(false);

  watch(
    watchResources,
    async (_) => {
      code.value = formatCodeString(...codeTemplate.value);
    },
    { deep: true },
  );

  provide("changed", changed);
  provide("data", watchResources);

  return { code };
};
