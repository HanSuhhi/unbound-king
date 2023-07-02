import type { MenuOption } from "naive-ui";
import { defineStore } from "pinia";
import { ref } from "vue";

const useGlobalStore = defineStore("app-store", () => {
  const activeAsideModule = ref<AsideModule>();
  const activePage = ref<MenuOption>();

  return { activeAsideModule, activePage };
});

export { useGlobalStore };
