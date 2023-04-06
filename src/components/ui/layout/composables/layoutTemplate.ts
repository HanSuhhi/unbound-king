import type { StyleSetter } from "../../tool/styleSetter.tool";
import { findIndex, keys } from "lodash-es";
import type { Ref } from "vue";
import { ref, watchEffect, nextTick } from "vue";

export const useLayoutTemplate = (slots: any, styleSetter: Ref<StyleSetter | undefined>) => {
  const reverse = ref(false);
  const defaultTemplate = ref("");

  const createSlotTemplate = (slotNames: string[]): string => {
    if (slotNames.length === 1) return `"main main" "main main" "main main"`;
    slotNames.splice(findIndex(slotNames, "default"), 1);
    if (slotNames.length === 1) {
      const slot = slotNames[0];
      if (!["header", "footer", "aside"].includes(slot)) return "";
      return `csss-only-${slot}`;
    }
    // if (slotNames.length === 2) {
    //   const headerAndFooter = slotNames.includes("header") && slotNames.includes("footer");
    //   const headerAndAside = slotNames.includes("header") && slotNames.includes("aside");
    //   const AsideAndFooter = slotNames.includes("aside") && slotNames.includes("footer");
    //   if (headerAndFooter) return `csss-header-footer`;
    //   if (headerAndAside) return `csss-header-aside`;
    //   if (AsideAndFooter) return `csss-aside-footer`;
    // }
    return "";
  };
  const initLayoutTemplate = () => {
    const slotNames = keys(slots);
    const mainSlotName = "default";
    if (!slotNames.includes(mainSlotName)) return;
    const gridTemplateClass = createSlotTemplate(slotNames);
    if (gridTemplateClass) styleSetter.value?.addClass(gridTemplateClass);
  };

  watchEffect(() => {
    nextTick(initLayoutTemplate);
  });

  return { reverse, defaultTemplate };
};
