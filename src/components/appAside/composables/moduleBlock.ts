import type { useCsssTabs } from "csss-ui";
import { nextTick, watchEffect } from "vue";

const calcModuleBorderRadius = (active: number, total: number): string => {
  if (total !== 1) {
    if (active === 0) return "var(--normal) var(--normal) 0 0 ";
    else if (active === total - 1) return "0 0 var(--normal) var(--normal)";
    else return "0 0 0 0";
  }
  return "var(--normal)";
};

export const useModuleBlock = (tabs: ReturnType<typeof useCsssTabs>) => {
  nextTick(
    watchEffect.bind(this, () => {
      const listElement = document.getElementsByClassName("app-aside__list")[0] as HTMLElement;
      if (!listElement) return;
      const total = tabs.read.value.total;
      const active = tabs.state.value.active;
      listElement.style.setProperty("--length", total.toString());
      listElement.style.setProperty("--active", active.toString());
      listElement.style.setProperty("--clip-border-radius", calcModuleBorderRadius(active, total));
    }),
  );
};
