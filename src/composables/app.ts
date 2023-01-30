import { useCsssLayout } from "csss-ui";
import { useMagicKeys } from "@vueuse/core";
import { watch, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { useSettingStore } from "@/stores/setting.store";
import { debounce, throttle } from "lodash-es";

export const useApp = () => {
  const { COMP: Layout } = useCsssLayout({
    state: {
      layoutType: "aside",
    },
    style: {
      asideWidthSize: "large",
      classList: {
        layout: ["", "app"],
        header: ["", "app-header"],
        main: ["", "app-main"],
        aside: ["", "app-aside"],
      },
    },
  });

  /**
   * @description keys
   */
  const { escape } = useMagicKeys();
  const { settingActive } = storeToRefs(useSettingStore());
  watch(escape, () => {
    settingActive.value = !settingActive.value;
  });

  return { Layout };
};
