import { storeToRefs } from "pinia";
import { useGlobalDialog } from "../../../../composables/components/globalDialog";
import { useKeyStore } from "@/stores/key.store";

export function defineQuitEvent() {
  const { warning } = useGlobalDialog();
  const { freeze } = storeToRefs(useKeyStore());

  const event: KeyEvent = {
    key: "q",
    translator: ["quit-game-alive", "退出游戏"],
    fn: (isPressed: boolean) => {
      if (!isPressed) {
        warning({
          title: "退出游戏",
          text: "是否确认退出并关闭页面？未保存的游玩数据可能不会被保存。",
          confirm() {
            window.close();
          },
          cancel() {
          },
          init() {
            freeze.value = true;
          }
        });
      }
    }
  };

  return [(event)];
}
