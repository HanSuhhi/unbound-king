import { useCsssTabs } from "@/components/ui/tabs";
import { useGlobalStore } from "@/stores/global.store";
import { findIndex } from "lodash-es";
import { storeToRefs } from "pinia";
import { watch } from "vue";
import { useAppAsideStore } from "../store/aside.store";
import { defineModuleBlock } from "./moduleBlock";

export const useAsideLayout = () => {
  const { activeAsideModule } = storeToRefs(useGlobalStore());
  const { activeModules } = storeToRefs(useAppAsideStore());

  const tabs = useCsssTabs({
    style: {
      panelTransition: "slide-down",
      classList: {
        tabs: ["", "app-aside_box"],
        list: ["app-aside_list"],
        listItem: ["app-aside_item"],
        panel: ["app-aside_panels"],
        panelItem: ["app-aside_panel"],
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

  return tabs;
};