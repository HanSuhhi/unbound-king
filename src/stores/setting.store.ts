import { entryDevSettingAuth } from "@/auth/pages/setting.auth";
import { SettingItemType } from "@/components/setting/enums/setting.enum";
import { useRadioToSwitch } from "@/composables/radioToSwitch";
import { defineStore } from "pinia";
import { ref } from "vue";

const useSettingStore = defineStore("setting-store", () => {
  /**
   * @description open setting drawer icon
   */
  const Setting = ref<HTMLElement>();

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
      auth: entryDevSettingAuth,
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

  return { settingModules, devMode, Setting };
});

export { useSettingStore };
