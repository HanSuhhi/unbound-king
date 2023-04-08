import { useKeyStore } from "@/stores/key.store";
import { onMounted, onUnmounted } from "vue";

export const mountKeyCommand = (keyCommand: KeyEvent) => {
  const { addKeyCommand, uninstallKeyCommand } = useKeyStore();

  onMounted(addKeyCommand.bind(this, keyCommand));
  onUnmounted(uninstallKeyCommand.bind(this, keyCommand));

  return keyCommand;
};
