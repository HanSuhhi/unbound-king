import { usePlayerStore } from "@/stores/player.store";
import { storeToRefs } from "pinia";
import { ref, watchEffect } from "vue";
import { authModuleConfig } from "./authModuleConfig";
import { devModuleConfig } from "./devModuleConfig";

export const defineModules = () => {
  const { states } = storeToRefs(usePlayerStore());

  const modules = ref<AppAsideModule[]>([]);

  watchEffect(() => {
    modules.value = [
      {
        key: "auth",
        show: true,
        icon: "i-carbon-two-factor-authentication",
        type: "default-menu",
        pages: authModuleConfig,
      },
      {
        key: "dev",
        show: states.value.aside_dev_entry,
        icon: "i-tabler-device-analytics",
        type: "default-menu",
        pages: devModuleConfig,
      },
      {
        key: "game",
        show: true,
        icon: "i-material-symbols-view-module",
        type: "default-menu",
        pages: authModuleConfig,
      },
    ];
  });

  return modules;
};
