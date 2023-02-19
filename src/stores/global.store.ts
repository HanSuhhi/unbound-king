import { defineStore } from "pinia";
import { ref } from "vue";

const useGlobalStore = defineStore("app-store", () => {
  const activeAsideModule = ref<AsideModule>();
  const activePage = ref<ModulePage>();

  const pageTransition = ref<"slide-left" | "slide-right">("slide-left");

  return { activeAsideModule, activePage, pageTransition };
});

export { useGlobalStore };
