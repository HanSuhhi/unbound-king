import { defineStore } from "pinia";
import { ref } from "vue";
const useGlobalStore = defineStore("global-store", () => {
  const activeAsideModule = ref<number>(0);

  return { activeAsideModule };
});

export { useGlobalStore };
