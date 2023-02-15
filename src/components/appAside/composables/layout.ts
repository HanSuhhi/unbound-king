import { useGlobalStore } from "@/stores/global.store";
import { useCsssTabs } from "csss-ui";
import { storeToRefs } from "pinia";
import { watchEffect } from "vue";
import { useModuleBlock } from "./moduleBlock";
import { makeModuleDraggable } from "./moduleDraggable";

export const useAsideLayout = () => {
  const { activeAsideModule } = storeToRefs(useGlobalStore());

  const tabs = useCsssTabs({
    style: {
      panelTransition: "aside-module",
      classList: {
        tabs: ["", "app-aside__box"],
        list: ["app-aside__list"],
        listItem: ["app-aside__list-item"],
        panelItem: ["_"],
      },
    },
  });

  watchEffect(() => (activeAsideModule.value = tabs.state.value?.active));

  useModuleBlock(tabs);
  makeModuleDraggable(tabs);

  return tabs;
};
