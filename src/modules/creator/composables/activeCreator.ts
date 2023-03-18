import { ref, provide, watch } from "vue";
import type { WritableComputedRef } from "vue";
import { DATA_Creators } from "../data/index";
import { isUndefined } from "lodash-es";

export const useActiveCreator = (code: WritableComputedRef<string>) => {
  const activeCreator = ref<Creator>(DATA_Creators[0]);
  const changed = ref();

  watch(
    activeCreator,
    (newCreator) => {
      code.value = JSON.stringify(newCreator);
      if (isUndefined(changed.value)) changed.value = false;
      else changed.value = true;
    },
    { immediate: true, deep: true },
  );

  provide("changed", changed);
  provide("creator", activeCreator);

  return [activeCreator];
};
