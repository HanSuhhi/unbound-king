import { ref, watchEffect } from "vue";
import { useCsssTabs } from "csss-ui";
import { useGlobalStore } from "@/stores/global.store";
import { storeToRefs } from "pinia";

export const useAppAside = () => {
  const { activeAsideModule } = storeToRefs(useGlobalStore());

  const appAsideModules = ref<ModuleList[]>([
    {
      icon: "i-carbon-two-factor-authentication",
    },
    {
      icon: "i-material-symbols-view-module",
    },
  ]);

  const { COMP: Tabs, state } = useCsssTabs({
    style: {
      needTransition: false,
      classList: {
        tabs: ["", "app-aside__box"],
        list: ["app-aside__list"],
        listItem: ["app-aside__list-item"],
        panelItem: ["_"],
      },
    },
  });
  watchEffect(() => (activeAsideModule.value = state.value?.active));

  return { Tabs, appAsideModules };
};
