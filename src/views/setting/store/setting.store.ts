import { isUndefined } from "lodash-es";
import { defineStore, storeToRefs } from "pinia";
import { computed, ref, watch } from "vue";
import { useSettingActive } from "../composables/settingActive";
import { usePlayerStore } from "../../../stores/player.store";
import { defineisSave } from "../composables/isSave";

const useSettingStore = defineStore("setting-store", () => {
  const { states } = storeToRefs(usePlayerStore());

  const SettingEnterIconRef = ref<HTMLElement>();
  const settingPageActive = ref(false);
  const save = defineisSave(settingPageActive);

  const settingModules = computed<SettingTitleModule[]>(() => [
    {
      title: "全局设置",
      items: [],
    },
    {
      title: "开发设置",
      auth: states.value.setting_dev_entry,
      items: [],
    },
  ]);

  const list = computed(() =>
    settingModules.value.filter((settingModule) => {
      if (isUndefined(settingModule.auth)) settingModule.auth = true;
      return settingModule.auth;
    }),
  );

  const { active } = useSettingActive(list, settingPageActive);

  return { list, settingPageActive, SettingEnterIconRef, active, save };
});

export { useSettingStore };
