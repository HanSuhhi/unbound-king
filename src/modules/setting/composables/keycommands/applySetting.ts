import { useGlobalDialogStore } from "@/components/dialog/store/dialog.store";
import { mountKeyCommand } from "@/composables/mountKeyCommand";
import { useSettingStore } from "@/modules/setting/store/setting.store";
import { storeToRefs } from "pinia";

export const useApplySetting = () => {
  const { save, settingPageActive } = storeToRefs(useSettingStore());
  const { dialogContent, enter } = storeToRefs(useGlobalDialogStore());

  const applySetting = (isClicked: boolean) => {
    if (isClicked === false) return;
    enter.value = () => (save.value = true);
    dialogContent.value = "是否将此设置应用于修改？";
  };

  const KEY_ApplySetting = {
    key: "ctrl_a",
    fn: applySetting,
  };
  mountKeyCommand(settingPageActive, KEY_ApplySetting);

  return applySetting;
};
