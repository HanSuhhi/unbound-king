import { entryDevSettingAuth } from "@/auth/pages/setting.auth";
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { defer } from "lodash-es";

const useSettingStore = defineStore("setting-store", () => {
  /**
   * @description dev mode
   */
  // const { COMP: DevMode, state: devMode } = useRadioToSwitch({});

  const SettingRef = ref<HTMLElement>();

  /**
   * @description setting status
   */
  const settingGlobalActive = ref(false);
  const _settingActive = ref(false);
  const settingActive = computed({
    get: () => _settingActive.value,
    set: (value) => {
      if (value) {
        settingGlobalActive.value = true;
        defer(() => (_settingActive.value = true));
      } else {
        _settingActive.value = false;
        defer(() => (settingGlobalActive.value = false));
      }
    },
  });

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

  return { list, settingActive, settingGlobalActive, SettingRef };
});

export { useSettingStore };
