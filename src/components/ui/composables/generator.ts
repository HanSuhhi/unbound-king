import type { UnwrapRef } from "vue";
import { computed, ref } from "vue";

export const useGenerator = <T>(defaultValue: T, extraSetFunc?: (v: UnwrapRef<T>) => void) => {
  const val = ref<T>(defaultValue);

  const generator = computed({
    get: () => val.value,
    set: (value) => {
      extraSetFunc?.(value);
      val.value = value;
    },
  });

  return { generator };
};
