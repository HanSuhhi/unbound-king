import { onMounted, onUnmounted } from "vue";
import { useKeyStore } from "@/stores/key.store";

export function mountKeyCommand(keyCommand?: KeyEvent) {
  if (!keyCommand) return;
  const { addKeyCommand, uninstallKeyCommand } = useKeyStore();

  onMounted(addKeyCommand.bind(this, keyCommand));
  onUnmounted(uninstallKeyCommand.bind(this, keyCommand));

  return keyCommand;
}
