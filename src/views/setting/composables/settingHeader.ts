import { useKeyStore } from "@/stores/key.store";
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
  const { addKeyCommand } = useKeyStore();
  addKeyCommand({
    key: "_s*",
    fn(activeKeys: string[]) {
      if (activeKeys.length !== 2) return;
      const keyIndex = activeKeys.indexOf("s");
      if (keyIndex === -1) return;
      activeKeys.splice(keyIndex, 1);
      const key = Number(activeKeys[0]) - 1;
      if (key < list.value.length) active.value = key;
    },
  });

  return { active };
};
