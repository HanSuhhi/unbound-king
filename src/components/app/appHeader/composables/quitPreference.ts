import type { Ref } from "vue";
import { createAutoMountEvent } from "../../../../composables/key/mountKeyCommand";

export function useQuitPreference(settingShow: Ref<boolean>) {
  return createAutoMountEvent(settingShow)({
    key: "escape",
    translator: ["quit_preference", "退出偏好"],
    fn: (isPressed: boolean) => {
      if (isPressed) return;
      settingShow.value = false;
    }
  });
}
