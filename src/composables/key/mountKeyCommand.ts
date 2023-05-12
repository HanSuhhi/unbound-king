import type { Ref } from "vue";
import { onMounted, onUnmounted, watch } from "vue";
import { useKeyStore } from "@/stores/key.store";

export function mountKeyCommand(keyCommand?: KeyEvent) {
  if (!keyCommand) return;
  const { addKeyCommand, uninstallKeyCommand } = useKeyStore();

  onMounted(addKeyCommand.bind(null, keyCommand));
  onUnmounted(uninstallKeyCommand.bind(null, keyCommand));

  return keyCommand;
}

export function autoMountByRef(ref: Ref<boolean>, event: KeyEvent) {
  const { addKeyCommand, uninstallKeyCommand } = useKeyStore();

  watch(ref, (showing) => {
    if (!showing) uninstallKeyCommand(event);
    else addKeyCommand(event);
  });

  return event;
}

export function createAutoMountEvent(ref: Ref<boolean>) {
  return (event: KeyEvent) => autoMountByRef(ref, event);
}
