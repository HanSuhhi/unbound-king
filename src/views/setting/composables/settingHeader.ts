import { useSettingStore } from "@/stores/setting.store";
import { useMagicKeys } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { computed, ref, watch } from "vue";

export const useSettingHeader = () => {
  /**
   * @description active
   */
  const active = ref(0);
  const { list } = storeToRefs(useSettingStore());

  /**
   * @description keyboard
   */
  const { current } = useMagicKeys();
  const keys = computed(() => Array.from(current));
  watch(keys, (v) => {
    if (v.length !== 2) return;
    const keyIndex = v.indexOf("s");
    if (keyIndex === -1) return;
    v.splice(keyIndex, 1);
    const key = Number(v[0]) - 1;
    if (key < list.value.length) active.value = key;
  });

  return { active };
};
