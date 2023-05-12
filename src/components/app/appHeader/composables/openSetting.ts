import { useRouter } from "vue-router";
import type { Ref } from "vue";
import { isFocusBody } from "@/composables/element/textFocus";
import { createAutoMountEvent } from "@/composables/key/mountKeyCommand";

export function defineOpenSetting(popoverControl: Ref<boolean>) {
  const router = useRouter();

  return createAutoMountEvent(popoverControl)({
    key: "s",
    translator: ["open-setting", "打开设置界面"],
    fn: (isPressed: boolean) => {
      if (isFocusBody()) return;
      if (!isPressed) {
        popoverControl.value = false;
        void router.push({ name: "setting" });
      }
    }
  });
}
