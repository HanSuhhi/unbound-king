import { useGlobalDialogStore } from "@/components/dialog/store/dialog.store";
import { mountKeyCommand } from "@/composables/key/mountKeyCommand";
import { useSettingStore } from "@/modules/setting/store/setting.store";
import { storeToRefs } from "pinia";

export const useResetSetting = () => {
  const { reset, settingPageActive } = storeToRefs(useSettingStore());
  const { dialogContent, enter } = storeToRefs(useGlobalDialogStore());

  const resetSetting = (isClicked: boolean) => {
    if (isClicked === false) return;
    enter.value = () => {
      reset.value = !reset.value;
    };
    dialogContent.value = "是否还原所有配置？";
  };

  const KEY_ApplySetting = {
    key: "ctrl_z",
    fn: resetSetting,
  };
  mountKeyCommand(settingPageActive, KEY_ApplySetting);

  return resetSetting;
};
