import { useDark, useToggle } from "@vueuse/core";
import { mountKeyCommand } from "@/composables/experience/key/mountKeyCommand";
import { defineKeyEvent } from "@/composables/experience/key/keyEvent";

export function useTheme(enterKeyEvent: KeyEventWithoutFn) {
  const isDark = useDark();
  const toggleDark = useToggle(isDark);

  const keyEvent: KeyEvent = {
    ...enterKeyEvent,
    fn: defineKeyEvent(enterKeyEvent)(toggleDark)
  };

  mountKeyCommand(keyEvent);

  return { toggleDark, isDark };
}
