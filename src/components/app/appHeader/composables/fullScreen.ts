import { mountKeyCommand } from "../../../../composables/key/mountKeyCommand";
import { definePressed } from "@/composables/key/keyEvent";
import { i18nLangModel } from "@/locals/lang.model";
import { toggleFullScreen } from "@/composables/experience/system";

export function useFullScreen() {
  const keyEvent: KeyEvent = {
    key: "F11",
    translator: ["toggle full screen", i18nLangModel.modules.screen.toggle],
    fn: definePressed(() => {
      void toggleFullScreen();
    })
  };

  mountKeyCommand(keyEvent);

  return keyEvent;
}
