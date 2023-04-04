import { mountKeyCommand } from "@/composables/key/mountKeyCommand";
import type { ComputedRef, Ref } from "vue";
import { ref } from "vue";

export const useSettingActive = (list: ComputedRef<SettingTitleModule[]>, pageActive: Ref<boolean>) => {
  const active = ref(0);

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
  mountKeyCommand(pageActive, KEY_ToggleActive);

  return active;
};
