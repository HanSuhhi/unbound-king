import { storeToRefs } from "pinia";
import type { Ref } from "vue";
import { defer } from "lodash";
import { useGlobalDialog } from "../../../../../composables/components/globalDialog";
import { useKeyStore } from "@/stores/key.store";
import { createAutoMountEvent } from "@/composables/experience/key/mountKeyCommand";
import { isFocusBody } from "@/composables/components/textFocus";
import { i18nLangModel } from "#/composables/i18n";

export function defineQuitEvent(popoverControl: Ref<boolean>) {
  const { warning } = useGlobalDialog();
  const { freeze } = storeToRefs(useKeyStore());

  return createAutoMountEvent(popoverControl)({
    key: "q",
    translator: i18nLangModel.header.perference.quitGame,
    fn: (isPressed: boolean) => {
      if (import.meta.env.SSR) return;
      if (isFocusBody()) return;

      if (!isPressed) {
        popoverControl.value = false;
        defer(() => {
          warning({
            title: i18nLangModel.header.perference.quitGame,
            text: i18nLangModel.dialog.quitGame.description,
            confirm: window.close,
            cancel() {
            },
            init() {
              freeze.value = true;
            }
          });
        });
      }
    }
  });
}
