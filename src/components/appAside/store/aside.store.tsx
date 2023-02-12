import { toArray } from "lodash-es";
import { defineStore } from "pinia";
import { ref, computed, shallowRef, watchEffect } from "vue";
import { defineMenu } from "../data/menu";

const useAppAsideStore = defineStore("app-aside", () => {
  const menus = defineMenu();

  const activeMenus = computed(() => toArray(menus.value).filter((menu) => menu.show));

  return { menus, activeMenus };
});
export { useAppAsideStore };
