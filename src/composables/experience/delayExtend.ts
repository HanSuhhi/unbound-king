import type { Ref } from "vue";
import { ref, watch } from "vue";

export const useDelayExtend = (isExtend: Ref<boolean>, delayTime = Number(import.meta.env.STYLE_ANIMATION_DURATION) / 2) => {
  const delayExtend = ref(true);
  watch(isExtend, (status) => {
    if (!isExtend.value) delayExtend.value = status;
    else setTimeout(() => (delayExtend.value = status), delayTime);
  });

  return delayExtend;
};
