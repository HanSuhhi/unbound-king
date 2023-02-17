import { defineStore } from "pinia";
import { ref, computed } from "vue";

const useGlobalStore = defineStore("app-store", () => {
  const activeAsideModule = ref<string>("");
  const activePage = ref<ModulePage>();

  const pageTransition = ref<"slide-left" | "slide-right">("slide-left");

  return { activeAsideModule, activePage, pageTransition };
});

export { useGlobalStore };
