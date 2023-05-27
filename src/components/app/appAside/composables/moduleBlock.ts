import { findIndex } from "lodash";
import { storeToRefs } from "pinia";
import { computed, nextTick, watchEffect } from "vue";
import { useAppAsideStore } from "../store/aside.store";
import { useGlobalStore } from "@/stores/global.store";
import type { useCsssTabs } from "@/components/ui/tabs";

function calcModuleBorderRadius(active: number, total: number): string {
  if (total !== 1) {
    if (active === 0) return "var(--normal) var(--normal) 0 0 ";
    else if (active === total - 1) return "0 0 var(--normal) var(--normal)";
    else return "0 0 0 0";
  }
  return "var(--normal)";
}

export async function defineModuleBlock(tabs: ReturnType<typeof useCsssTabs>) {
  const { activeModules } = storeToRefs(useAppAsideStore());
  const { activeAsideModule } = storeToRefs(useGlobalStore());

  const activeModuleIndex = computed(() => findIndex(activeModules.value, activeAsideModule.value));

  const updateModuleBlock = () => {
    const listElement = tabs?.read.value?.tabsList;
    if (!listElement) return;
    const total = activeModules.value.length;
    listElement.style.setProperty("--module-length", total.toString());
    listElement.style.setProperty("--active", activeModuleIndex.value.toString());
    listElement.style.setProperty("--clip-border-radius", calcModuleBorderRadius(activeModuleIndex.value, total));
  };

  await nextTick(watchEffect.bind(null, updateModuleBlock));
}
