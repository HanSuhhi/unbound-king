import { usePlayerStore } from "@/stores/player.store";
import { storeToRefs } from "pinia";
import { ref, watchEffect } from "vue";
import { authModuleConfig } from "./authModuleConfig";
import { devModuleConfig } from "./devModuleConfig";

export const defineModules = () => {
  const { states } = storeToRefs(usePlayerStore());

  const modules = ref<Record<string, AppAsideModule>>();

  watchEffect(() => {
    modules.value = {
      auth: {
        show: true,
        icon: "i-carbon-two-factor-authentication",
        type: "default-menu",
        config: authModuleConfig,
      },
      dev: {
        show: states.value.aside_dev_entry,
        icon: "i-tabler-device-analytics",
        type: "default-menu",
        config: devModuleConfig,
      },
      game: {
        show: true,
        icon: "i-material-symbols-view-module",
        type: "default-menu",
        config: [],
      },
    };
  });

  return modules;
};
