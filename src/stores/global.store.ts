import { useSetting } from "@/components/setting/composables/setting";
import { defineStore } from "pinia";
import { ref, computed, onMounted, watchEffect } from "vue";
const useGlobalStore = defineStore("global-store", () => {
  /**
   * @description active module
   */
  const activeAsideModule = ref<number>(0);

  /**
   * @description setting drawer
   */
  const { Drawer, state } = useSetting();

  const settingStatus = computed({
    get: () => state.value?.show,
    set: (value) => (state.value.show = value),
  });

  return { activeAsideModule, settingStatus, Drawer };
});

export { useGlobalStore };
