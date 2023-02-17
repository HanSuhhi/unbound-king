import { defineStore } from "pinia";
import { ref, computed } from "vue";

const useGlobalStore = defineStore("app-store", () => {
  const activeAsideModule = ref<string>("");

  const activePage = ref<ModulePage>();

  return { activeAsideModule, activePage };
});

export { useGlobalStore };
