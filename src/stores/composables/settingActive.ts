import { useKeyStore } from "@/stores/key.store";
import { ref } from "vue";

export const useSettingActive = (list: any) => {
  const active = ref(0);
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
