import type { Ref } from "vue";
import { createAutoMountEvent } from "../../../../composables/key/mountKeyCommand";
import { i18nLangModel } from "../../../../locals/lang.model";
import { definePressed, runKeyEvent } from "../../../../composables/key/keyEvent";
import { useKeyStore } from "@/stores/key.store";

export function closeModules(settingShow: Ref<boolean>) {
  const { getKeyEvent } = useKeyStore();
  const keyEvent: KeyEvent = {
    key: "escape",
    translator: ["close_modules", i18nLangModel.modules.close_modules],
    fn: definePressed(() => settingShow.value = false),
    async mount() {
      const keyCommand = getKeyEvent(keyEvent);
      if (keyCommand) await runKeyEvent(keyCommand);
    }
  };
  return createAutoMountEvent(settingShow)(keyEvent);
}
