import { useGlobalDialogStore } from "@/components/dialog/store/dialog.store";
import { mountKeyCommand } from "@/composables/key/mountKeyCommand";
import { useSettingStore } from "@/modules/setting/store/setting.store";
import { storeToRefs } from "pinia";

export const useQuitGame = () => {
  const { dialogContent, enter } = storeToRefs(useGlobalDialogStore());
  const { settingPageActive } = storeToRefs(useSettingStore());

  const quitDialog = (isClicked?: boolean) => {
    if (isClicked === false) return;
    enter.value = () => {
      window.open("about:blank", "_self")?.close();
      window.close();
    };
    dialogContent.value = "是否确认退出游戏？";
  };

  const KEY_QuitDialog = {
    key: "q",
    fn: quitDialog,
  };
  mountKeyCommand(settingPageActive, KEY_QuitDialog);

  return quitDialog;
};
