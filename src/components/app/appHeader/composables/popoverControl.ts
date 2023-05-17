import { defineMultiplePressed } from "../../../../composables/key/keyEvent";
import { useKeyStore } from "@/stores/key.store";
import { debouncedRef } from "@/composables/plus/ref";

export function usePopoverControl(enterKeyEvent: KeyEventWithoutFn) {
  const { addKeyCommand } = useKeyStore();

  const popoverControl = debouncedRef(false, 0);
  const toggle = () => popoverControl.value = !popoverControl.value;

  const event: KeyEvent = {
    ...enterKeyEvent,
    fn: defineMultiplePressed(enterKeyEvent.key as string[])(toggle)
  };

  void addKeyCommand(event);

  return {
    popoverControl,
    toggle
  };
}
