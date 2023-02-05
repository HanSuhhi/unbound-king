import { entryDevSettingAuth } from "@/auth/pages/setting.auth";
import { useTimeout } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useSettingStore = defineStore("setting-store", () => {
  const settingAniTime = 0.35;

  /**
   * @description dev mode
   */
  // const { COMP: DevMode, state: devMode } = useRadioToSwitch({});

  const SettingEnterIconRef = ref<HTMLElement>();

  /**
   * @description setting status
   */
  const settingActive = ref(false);

  /**
   * @description items
   */
  const settingModules = ref<SettingModule[]>([
    {
      title: "全局设置",
      items: [],
    },
    {
      title: "开发设置",
      auth: entryDevSettingAuth,
      items: [],
    },
  ]);

  const list = computed(() => settingModules.value.filter((v) => !v.auth || v.auth.effective));

  return { list, settingActive, SettingEnterIconRef, settingAniTime };
});

export { useSettingStore };
