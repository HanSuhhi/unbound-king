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

  return { activeAsideModule };
});

export { useGlobalStore };
