import { useDark, useToggle } from "@vueuse/core";
import { mountKeyCommand } from "../../../../composables/key/mountKeyCommand";
import { defineMultiplePressed } from "../../../../composables/key/keyEvent";
import { i18nLangModel } from "@/locals/lang.model";

const key = ["control", "d"];

export function useTheme() {
  const isDark = useDark();
  const toggleDark = useToggle(isDark);

  const keyEvent: KeyEvent = {
    key,
    translator: ["toggle theme", i18nLangModel.modules.theme.toggle],
    fn: defineMultiplePressed(key)(toggleDark)
  };

  mountKeyCommand(keyEvent);

  return { toggleDark, isDark };
}
