import { useGlobalDialogStore } from "@/stores/dialog.store";
import { useKeyStore } from "@/stores/key.store";
import { storeToRefs } from "pinia";
import { ref } from "vue";

export const useSettingFooter = () => {
  const settingFooterButtons = ref<SettingFooterButton[]>([
    {
      title: "重置",
      key: ["ctrl", "r"],
    },
    {
      title: "取消",
      key: "esc",
    },
    {
      title: "应用",
      key: "enter",
    },
  ]);

  const { addAutoKeyCommand } = useKeyStore();
  const { dialogContent } = storeToRefs(useGlobalDialogStore());

  const quitDialog = () => (dialogContent.value = "是否确认退出游戏？");

  const KEY_QuitDialog = {
    key: "q",
    fn: quitDialog,
  };
  addAutoKeyCommand(KEY_QuitDialog);

  return { settingFooterButtons, quitDialog };
};
