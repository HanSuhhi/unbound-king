import { useKeyStore } from "@/stores/key.store";
import type { Ref } from "vue";
import { watch } from "vue";

export const mountKeyCommand = (time: Ref<boolean>, keyCommand: KeyCommand) => {
  const { addKeyCommand, uninstallKeyCommand } = useKeyStore();

  watch(time, (isShow) => {
    if (isShow) addKeyCommand(keyCommand);
    else uninstallKeyCommand(keyCommand.key);
  });
};
