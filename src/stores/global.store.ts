import { defineStore } from "pinia";
import { ref } from "vue";

const useGlobalStore = defineStore("app-store", () => {
  const activeAsideModule = ref<AsideModule>();
  const activePage = ref<ModulePage>();

  return { activeAsideModule, activePage };
});

export { useGlobalStore };
