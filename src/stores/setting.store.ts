import { defineStore } from "pinia";
import { useCsssRadio } from "csss-ui";
import { computed, ComputedRef, ref, watchEffect } from "vue";
import { SettingItemType } from "@/components/setting/enums/setting.enum";
import { useRadioToSwitch } from "@/composables/radioToSwitch";
const useSettingStore = defineStore("setting-store", () => {
  /**
   * @description dev mode
   */
  const { COMP: DevMode, state: devMode } = useRadioToSwitch({});

  /**
   * @description items
   */
  const settingModules = ref<SettingModule[]>([
    {
      title: "开发设置",
      password: "0218",
      items: [
        {
          name: "开发者模式",
          type: SettingItemType.Radio,
          items: ["关闭", "开启"],
          comp: () => DevMode,
        },
      ],
    },
  ]);

  return { settingModules, devMode };
});

export { useSettingStore };
