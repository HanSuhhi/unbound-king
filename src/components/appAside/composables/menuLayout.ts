import { useCsssMenu } from "csss-ui";
import { defer } from "lodash-es";
import { storeToRefs } from "pinia";
import { computed, watch } from "vue";
import { useAppAsideStore } from "../store/aside.store";

export const defineMenuLayout = () => {
  const { activeModule, activeMenuIndex } = storeToRefs(useAppAsideStore());

  const asideMenu = computed(() => {
    return useCsssMenu({
      state: {
        menuList: activeModule.value?.pages,
        active: activeMenuIndex.value,
      },
      style: {
        classList: {
          menu: ["auth-module"],
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
      if (!activeIndexes?.length) return;
      defer(() => {
        activeMenuIndex.value = activeIndexes;
      });
    },
  );

  watch(activeMenuIndex, (activeIndexes) => {
    if (!activeIndexes.length) return;
    if (!asideMenu.value?.state.value?.active) return;
    defer(() => {
      asideMenu.value.state.value.active = activeIndexes;
    });
  });

  return { asideMenu };
};
