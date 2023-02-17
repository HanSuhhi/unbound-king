import { useGlobalStore } from "@/stores/global.store";
import { useCsssTabs } from "csss-ui";
import { storeToRefs } from "pinia";
import { watch } from "vue";
import { useAppAsideStore } from "../store/aside.store";
import { defineModuleBlock } from "./moduleBlock";
import { makeModuleDraggable } from "./moduleDraggable";

export const useAsideLayout = () => {
  const { activeAsideModule } = storeToRefs(useGlobalStore());
  const { activeModules, activeModuleIndex } = storeToRefs(useAppAsideStore());

  const tabs = useCsssTabs({
    style: {
      panelTransition: "aside-module",
      classList: {
        tabs: ["", "app-aside__box"],
        list: ["app-aside__list"],
        listItem: ["app-aside__list-box"],
        panelItem: ["_"],
      },
    },
  });

  watch(
    () => tabs.state.value?.active,
    (active) => {
      activeAsideModule.value = activeModules.value[active]?.key;
    },
  );

  watch(activeModuleIndex, (activeIndex) => {
    tabs.state.value.active = activeIndex;
  });

  defineModuleBlock(tabs);
  makeModuleDraggable(tabs);

  return tabs;
};
