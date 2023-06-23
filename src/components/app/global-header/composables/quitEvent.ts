import { storeToRefs } from "pinia";
import type { Ref } from "vue";
import { defer } from "lodash";
import { useGlobalDialog } from "../../../../composables/components/globalDialog";
import { useKeyStore } from "@/stores/key.store";
import { createAutoMountEvent } from "@/composables/key/mountKeyCommand";

export function defineQuitEvent(popoverControl: Ref<boolean>) {
  const { warning } = useGlobalDialog();
  const { freeze } = storeToRefs(useKeyStore());

  return createAutoMountEvent(popoverControl)({
    key: "q",
    translator: ["quit-game-alive", "退出游戏"],
    fn: (isPressed: boolean) => {
      if (import.meta.env.SSR) return;
      if (document.activeElement?.tagName !== "BODY") return;

      if (!isPressed) {
        popoverControl.value = false;
        defer(() => {
          warning({
            title: "退出游戏",
            text: "是否确认退出并关闭页面？未保存的游玩数据可能不会被保存。",
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
