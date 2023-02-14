import { useGlobalStore } from "@/stores/global.store";
import { useCsssTabs } from "csss-ui";
import { storeToRefs } from "pinia";
import { nextTick, watchEffect } from "vue";

const calcModuleBorderRadius = (active: number, total: number): string => {
  console.log("active: number, total: ", active, total);
  if (total !== 1) {
    if (active === 0) return "var(--normal) var(--normal) 0 0 ";
    else if (active === total - 1) return "0 0 var(--normal) var(--normal)";
    else return "0 0 0 0";
  }
  return "var(--normal)";
};

export const useAsideLayout = () => {
  const { activeAsideModule } = storeToRefs(useGlobalStore());

  const tabs = useCsssTabs({
    style: {
      panelTransition: "slide-left",
      classList: {
        tabs: ["", "app-aside__box"],
        list: ["app-aside__list"],
        listItem: ["app-aside__list-item"],
        panelItem: ["_"],
      },
    },
  });

  nextTick(
    watchEffect.bind(this, () => {
      const listElement = document.getElementsByClassName("app-aside__list")[0] as HTMLElement;
      if (!listElement) return;
      const total = tabs.read.value.total;
      const active = tabs.state.value.active;
      listElement.style.setProperty("--length", total.toString());
      listElement.style.setProperty("--active", active.toString());
      // calc border radius
      const borderRadius = calcModuleBorderRadius(active, total);
      console.log("borderRadius: ", borderRadius);
      listElement.style.setProperty("--clip-border-radius", borderRadius);
    }),
  );

  watchEffect(() => (activeAsideModule.value = tabs.state.value?.active));

  return tabs;
};
