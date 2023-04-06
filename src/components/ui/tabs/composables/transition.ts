import type { Ref } from "vue";
import { ref } from "vue";

export const useNeedToggleTransition = (active: Ref<number>) => {
  const transitionName = ref<"slide-right" | "slide-left">("slide-left");
  const setPanel = (index: number) => (transitionName.value = index < active.value ? "slide-right" : "slide-left");

  return { transitionName, setPanel };
};
