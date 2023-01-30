import { useSettingStore } from "@/stores/setting.store";
import { useMagicKeys, useWindowSize } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

export const useSettingFooter = () => {
  const { settingActive } = storeToRefs(useSettingStore());
  const { width } = useWindowSize();

  /**
   * @description button type
   */
  const settingFooterFunctions = {
    escape: () => {
      // @TODO model
      settingActive.value = false;
    },
  };

  const settingFooterButtons = ref<SettingFooterButton[]>([
    {
      title: "重置",
      key: ["ctrl", "r"],
    },
    {
      title: "取消",
      key: "esc",
      feedback: settingFooterFunctions.escape,
    },
    {
      title: "应用",
      key: "enter",
    },
  ]);

  return { settingFooterFunctions, settingFooterButtons };
};
