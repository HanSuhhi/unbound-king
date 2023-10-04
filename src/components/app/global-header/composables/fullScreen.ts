import { mountKeyCommand } from "../../../../composables/experience/key/mountKeyCommand";
import type { ModuleProp } from "../components/mainModules/module-type";
import { definePressed } from "@/composables/experience/key/keyEvent";
import { toggleFullScreen } from "@/composables/experience/system";

export function useFullScreen(enterKeyEvent: ModuleProp["enterKeyEvent"]) {
  const keyEvent: KeyEvent = {
    ...enterKeyEvent,
    fn: definePressed(() => {
      void toggleFullScreen();
    })
  };

  mountKeyCommand(keyEvent);

  return keyEvent;
}
