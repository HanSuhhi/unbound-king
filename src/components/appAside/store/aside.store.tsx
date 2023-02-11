import { toArray } from "lodash-es";
import { defineStore } from "pinia";
import { ref, computed, shallowRef } from "vue";
import AuthModuleVue from "../components/authModule/AuthModule.vue";
import GameModuleVue from "../components/gameModule/GameModule.vue";

const useAppAsideStore = defineStore("app-aside", () => {
  const menus = ref<Record<string, AppAsideModule>>({
    auth: {
      show: true,
      icon: "i-carbon-two-factor-authentication",
      comp: shallowRef(AuthModuleVue),
    },
    game: {
      show: true,
      icon: "i-material-symbols-view-module",
      comp: shallowRef(GameModuleVue),
    },
  });

  const activeMenus = computed(() => toArray(menus.value).filter((menu) => menu.show));

  return { menus, activeMenus };
});
export { useAppAsideStore };
