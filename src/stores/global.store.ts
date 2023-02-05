import { defineStore } from "pinia";
import { ref } from "vue";
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
