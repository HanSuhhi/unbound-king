import type { Ref } from "vue";
import { ref, watch } from "vue";

export const defineisSave = (pageActive: Ref<boolean>) => {
  const save = ref(false);

  watch(save, (isSaved) => {
    if (!isSaved) {
      pageActive.value = false;
    }
  });

  return save;
};
