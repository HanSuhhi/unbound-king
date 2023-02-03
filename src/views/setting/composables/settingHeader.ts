import { useKeyStore } from "@/stores/key.store";
import { useSettingStore } from "@/stores/setting.store";
import { storeToRefs } from "pinia";
import { ref } from "vue";

export const useSettingHeader = () => {
  /**
   * @description active
   */
  const active = ref(0);
  const { list } = storeToRefs(useSettingStore());

  /**
   * @description keyboard
   */
  const { addAutoKeyCommand } = useKeyStore();

  const KEY_ToggleActive = {
    key: "_s*",
    fn: (activeKeys: string[]) => {
      const KeysNumberLessThan2 = activeKeys.length !== 2;
      if (KeysNumberLessThan2) return;

      const keyIndex = activeKeys.indexOf("s");
      const dontHaveMainKey = keyIndex === -1;
      if (dontHaveMainKey) return;

      activeKeys.splice(keyIndex, 1);
      const remainingKey = Number(activeKeys[0]) - 1;
      const remainKeyNumberIsLessThanListLength = remainingKey < list.value.length;
      if (remainKeyNumberIsLessThanListLength) active.value = remainingKey;
    },
  };
  addAutoKeyCommand(KEY_ToggleActive);

  return { active };
};
