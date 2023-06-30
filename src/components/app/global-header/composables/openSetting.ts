import { useRouter } from "vue-router";
import type { Ref } from "vue";
import { isFocusBody } from "@/composables/element/textFocus";
import { createAutoMountEvent } from "@/composables/key/mountKeyCommand";
import { i18nLangModel } from "#/composables/i18n";

export function defineOpenSetting(popoverControl: Ref<boolean>) {
  const router = useRouter();

  return createAutoMountEvent(popoverControl)({
    key: "s",
    translator: i18nLangModel.header.perference.openSetting,
    fn: (isPressed: boolean) => {
      if (isFocusBody()) return;
      if (!isPressed) {
        popoverControl.value = false;
        void router.push({ name: "setting" });
      }
    }
  });
}
