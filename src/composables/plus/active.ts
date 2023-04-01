import { ref, computed } from "vue";

export const useActive = <T>() => {
  const activeData = ref<T>();
  const active = computed({
    get() {
      return Boolean(activeData.value);
    },
    set(state) {
      if (!state) activeData.value = undefined;
    }
  });

  return { active, activeData };
};