import { useKeyStore } from "@/stores/key.store";
import { useGlobalDialog } from '../../../composables/components/globalDialog';

export const defineFooterQuitEvent = () => {
  const { addKeyCommand } = useKeyStore();
  const { warning } = useGlobalDialog();

  const event: KeyEvent = {
    key: "q",
    translator: ["quit-game-alive", "退出游戏"],
    alive: false,
    fn: (isPressed: boolean) => {
      if (!isPressed && !event.alive) {
        warning({
          title: '退出游戏',
          text: '是否确认退出并关闭页面？未保存的游玩数据可能不会被保存。',
          confirm() {
            window.close();
          },
          cancel() {
            event.alive = false;
          },
        });
        event.alive = true;
      }
    },
  };

  return [addKeyCommand(event)];
};