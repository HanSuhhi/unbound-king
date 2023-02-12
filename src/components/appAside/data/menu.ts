import { usePlayerStore } from "@/stores/player.store";
import { storeToRefs } from "pinia";
import { ref, shallowRef, computed, watch, watchEffect } from "vue";
import AuthModuleVue from "../components/authModule/AuthModule.vue";
import GameModuleVue from "../components/gameModule/GameModule.vue";
import DevModuleVue from "../components/devModule/DevModule.vue";

export const defineMenu = () => {
  const { states } = storeToRefs(usePlayerStore());

  const menu = ref<Record<string, AppAsideModule>>();

  watchEffect(() => {
    menu.value = {
      auth: {
        show: true,
        icon: "i-carbon-two-factor-authentication",
        comp: shallowRef(AuthModuleVue),
      },
      dev: {
        show: states.value.aside_dev_entry,
        icon: "i-tabler-device-analytics",
        comp: shallowRef(DevModuleVue),
      },
      game: {
        show: true,
        icon: "i-material-symbols-view-module",
        comp: shallowRef(GameModuleVue),
      },
    };
  });

  return menu;
};
