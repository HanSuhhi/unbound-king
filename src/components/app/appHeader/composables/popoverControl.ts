import { defer } from "lodash-es";
import { ref, watch } from "vue";
import { useKeyStore } from "@/stores/key.store";

function useModulesControl(enterKeyEvent: KeyEventWithoutFn) {
  const { addKeyCommand } = useKeyStore();

  const settingShow = ref(false);
  let inControl = false;

  const event: KeyEvent = {
    ...enterKeyEvent,
    fn: (commands: string) => {
      if (inControl) {
        settingShow.value = !settingShow.value;
        inControl = false;
      }
      const shouldInControl = commands.includes("control") && commands.includes("m") && commands.length === 2;
      if (shouldInControl) inControl = true;
    }
  };

  addKeyCommand(event);

  return settingShow;
}

export function usePopoverControl(enterKeyEvent: KeyEventWithoutFn) {
  const popoverControl = useModulesControl(enterKeyEvent);

  const element: HTMLElement = document.querySelector("#app")!;
  watch(popoverControl, (open) => {
    if (open) {
      defer(() => {
        element.onclick = () => popoverControl.value = false;
      });
    }
    else { element.onclick = null; }
  });

  return { popoverControl };
}
