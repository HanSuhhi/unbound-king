import { isUndefined } from "lodash-es";
import type { WritableComputedRef } from "vue";
import { provide, ref, watch } from "vue";
import { DATA_Creators } from "../data/index";

export const useActiveCreator = (code: WritableComputedRef<string>) => {
  const activeIndex = ref(0);
  const activeCreator = ref<Creator>(DATA_Creators[activeIndex.value]);
  const changed = ref<boolean>();

  watch(activeIndex, (newIndex) => {
    activeCreator.value = DATA_Creators[newIndex];
    changed.value = undefined;
  });

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
  provide("creator-tabs-index", activeIndex);
  provide("creator", activeCreator);

  return [activeCreator];
};
