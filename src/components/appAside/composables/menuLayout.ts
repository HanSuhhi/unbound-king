import { useCsssMenu } from "csss-ui";
import { defer, isEqual } from "lodash-es";
import { storeToRefs } from "pinia";
import { computed, watch, nextTick } from "vue";
import { useAppAsideStore } from "../store/aside.store";

export const defineMenuLayout = () => {
  const { activeModule, activeMenuIndex } = storeToRefs(useAppAsideStore());

  const asideMenu = computed(() => {
    return useCsssMenu({
      state: {
        menuList: activeModule.value?.pages,
        active: activeMenuIndex.value || [0, 0],
      },
      style: {
        classList: {
          menu: ["menu-module"],
          items: {
            0: ["menu-module-0"],
            1: ["menu-module-1"],
          },
        },
      },
    });
  });

  watch(
    () => asideMenu.value?.state.value?.active,
    (activeIndexes) => {
      defer(() => {
        if (isEqual(activeMenuIndex.value, activeIndexes)) return;
        if (!activeIndexes?.length) return;
        activeMenuIndex.value = activeIndexes;
      });
    },
  );

  watch(activeMenuIndex, (activeIndexes) => {
    if (!activeIndexes?.length) return;
    if (!asideMenu.value?.state.value?.active) return;
    asideMenu.value.state.value.active = activeIndexes;
  });

  return { asideMenu };
};
