import { ref } from "vue";
import { useKeyStore } from "@/stores/key.store";

export function usePopoverControl(enterKeyEvent: KeyEventWithoutFn) {
  const { addKeyCommand } = useKeyStore();

  const popoverControl = ref(false);

  const event: KeyEvent = {
    ...enterKeyEvent,
    fn: (commands: string[]) => {
      if (commands.length !== 2) return;
      const notInControl = commands.reduce((prev, curr) => {
        if (enterKeyEvent.key.includes(curr)) return prev - 1;
        return prev;
      }, 2);
      if (notInControl) return;
      popoverControl.value = !popoverControl.value;
    }
  };

  void addKeyCommand(event);

  const toggle = () => popoverControl.value = !popoverControl.value;

  return { popoverControl, toggle };
}
