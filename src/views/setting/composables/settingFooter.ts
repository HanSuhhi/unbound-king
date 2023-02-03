import { useGlobalDialogStore } from "@/stores/dialog.store";
import { useKeyStore } from "@/stores/key.store";
import { useSettingStore } from "@/stores/setting.store";
import { useWindowSize } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { ref } from "vue";

export const useSettingFooter = () => {
  const { settingActive } = storeToRefs(useSettingStore());
  const { width } = useWindowSize();

  /**
   * @description button type
   */
  const settingFooterFunctions = {
    escape: () => {
      // @TODO model
      settingActive.value = false;
    },
  };

  const settingFooterButtons = ref<SettingFooterButton[]>([
    {
      title: "重置",
      key: ["ctrl", "r"],
    },
    {
      title: "取消",
      key: "esc",
      feedback: settingFooterFunctions.escape,
    },
    {
      title: "应用",
      key: "enter",
    },
  ]);

  const { addAutoKeyCommand } = useKeyStore();
  const { showDialog } = storeToRefs(useGlobalDialogStore());

  const ShowDialog = () => {
    showDialog.value = true;
  };

  const KEY_ShowDialog = {
    key: "q",
    fn: ShowDialog,
  };
  addAutoKeyCommand(KEY_ShowDialog);

  return { settingFooterFunctions, settingFooterButtons, ShowDialog };
};
