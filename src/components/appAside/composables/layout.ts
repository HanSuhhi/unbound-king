import { useGlobalStore } from "@/stores/global.store";
import { useCsssTabs } from "csss-ui";
import { findIndex } from "lodash-es";
import { storeToRefs } from "pinia";
import { watch } from "vue";
import { useAppAsideStore } from "../store/aside.store";
import { defineModuleBlock } from "./moduleBlock";
import { makeModuleDraggable } from "./moduleDraggable";

export const useAsideLayout = () => {
  const { activeAsideModule } = storeToRefs(useGlobalStore());
  const { activeModules } = storeToRefs(useAppAsideStore());

  const tabs = useCsssTabs({
    style: {
      panelTransition: "aside-module",
      classList: {
        tabs: ["", "app-aside_box"],
        list: ["app-aside_list"],
        listItem: ["app-aside_item"],
        panel: ["app-aside_panel"],
        panelItem: ["_"],
      },
    },
  });

  watch(
    () => tabs.state.value?.active,
    (active) => {
      activeAsideModule.value = activeModules.value[active];
    },
  );

  watch(activeAsideModule, () => {
    tabs.state.value.active = findIndex(activeModules.value, activeAsideModule.value);
  });

  defineModuleBlock(tabs);
  makeModuleDraggable(tabs);

  return tabs;
};
