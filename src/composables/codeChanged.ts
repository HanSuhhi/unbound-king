import { isUndefined } from "lodash-es";
import type { ComputedRef, Ref } from "vue";
import { provide, ref, watch } from "vue";
import { formatCodeString } from "./formatCodeString";

export const applyDataToModule = (watchResources: Ref, codeTemplate: ComputedRef<string[]>) => {
  const code = ref(formatCodeString(...codeTemplate.value));
  const changed = ref<boolean>();

  watch(
    watchResources,
    async (_) => {
      code.value = formatCodeString(...codeTemplate.value);
      if (isUndefined(changed.value)) changed.value = false;
      else changed.value = true;
    },
    { deep: true },
  );

  provide("changed", changed);
  provide("data", watchResources);

  return { code };
};
