import { defineStore } from "pinia";
import { ref } from "vue";
const useGlobalStore = defineStore("global-store", () => {
  const activeAsideModule = ref<string>("");

  return { activeAsideModule };
});

export { useGlobalStore };
