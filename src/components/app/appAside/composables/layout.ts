import { findIndex } from "lodash";
import { storeToRefs } from "pinia";
import { watch } from "vue";
import { useAppAsideStore } from "../store/aside.store";
import { useGlobalStore } from "@/stores/global.store";
import { useCsssTabs } from "@/components/ui/tabs";

export async function useAsideLayout() {
  const { activeAsideModule } = storeToRefs(useGlobalStore());
  const { modules } = storeToRefs(useAppAsideStore());

  const tabs = useCsssTabs({
    style: {
      panelTransition: "slide-down",
      classList: {
        tabs: ["", "app-aside_box"],
        list: ["app-aside_list"],
        listItem: ["app-aside_item"],
        panel: ["app-aside_panels"],
        panelItem: ["app-aside_panel"]
      }
    }
  });

  watch(
    () => tabs.state.value?.active,
    (active) => {
      activeAsideModule.value = modules.value[active];
    }
  );

  watch(activeAsideModule, () => {
    if (!tabs?.state?.value) return;
    tabs.state.value.active = findIndex(modules.value, activeAsideModule.value);
  });

  return tabs;
}
