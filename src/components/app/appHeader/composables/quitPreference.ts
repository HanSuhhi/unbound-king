import type { Ref } from "vue";
import { watch } from "vue";
import { useKeyStore } from "@/stores/key.store";

export function useQuitPreference(settingShow: Ref<boolean>) {
  const { addKeyCommand, uninstallKeyCommand } = useKeyStore();

  const event2: KeyEvent = {
    key: "escape",
    translator: ["quit_preference", "退出偏好"],
    fn: (isPressed: boolean) => {
      if (isPressed) return;

      settingShow.value = false;
    }
  };

  watch(settingShow, (showing) => {
    if (!showing) uninstallKeyCommand(event2);
    else addKeyCommand(event2);
  });
}
