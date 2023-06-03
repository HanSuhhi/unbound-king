import type { ComputedRef, Ref } from "vue";
import { inject } from "vue";
import { range } from "lodash";
import { TopModulesLengthSymbol } from "../global-header.symbol";
import { createAutoMountEvent } from "@/composables/key/mountKeyCommand";
import { definePressed, runKeyEvent } from "@/composables/key/keyEvent";
import { i18nLangModel } from "@/locals/index";
import { useKeyStore } from "@/stores/key.store";

export function closeModules(settingShow: Ref<boolean>, index: number) {
  const modulesLength = inject<ComputedRef<number>>(TopModulesLengthSymbol)!;
  const { getKeyEventByMessage } = useKeyStore();
  const key = "escape";
  const translatorBase = "close_modules_";

  const keyEvent: KeyEvent = {
    key,
    translator: [`${translatorBase}${index}`, i18nLangModel.modules.close],
    fn: definePressed(() => {
      settingShow.value = false;
    }),
    mount() {
      range(modulesLength.value).forEach((i) => {
        if (i === index) return;
        const keyEvent = getKeyEventByMessage(key, `${translatorBase}${i}`);
        void runKeyEvent(keyEvent);
      });
    }
  };
  return { event: createAutoMountEvent(settingShow)(keyEvent) };
}
