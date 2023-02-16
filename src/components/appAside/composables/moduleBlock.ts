import type { useCsssTabs } from "csss-ui";
import { storeToRefs } from "pinia";
import { nextTick, watchEffect, computed, watch } from "vue";
import { useSettingStore } from "@/views/setting/store/setting.store";
import { useAppAsideStore } from "../store/aside.store";
import { findIndex } from "lodash-es";

const calcModuleBorderRadius = (active: number, total: number): string => {
  if (total !== 1) {
    if (active === 0) return "var(--normal) var(--normal) 0 0 ";
    else if (active === total - 1) return "0 0 var(--normal) var(--normal)";
    else return "0 0 0 0";
  }
  return "var(--normal)";
};

export const defineModuleBlock = (tabs: ReturnType<typeof useCsssTabs>) => {
  const { activeModules, active } = storeToRefs(useAppAsideStore());

  const updateModuleBlock = () => {
    const listElement = tabs.read.value.tabsList;
    if (!listElement) return;
    const total = activeModules.value.length;
    listElement.style.setProperty("--module-length", total.toString());
    listElement.style.setProperty("--active", active.value.toString());
    listElement.style.setProperty("--clip-border-radius", calcModuleBorderRadius(active.value, total));
  };

  nextTick(watchEffect.bind(this, updateModuleBlock));
};
