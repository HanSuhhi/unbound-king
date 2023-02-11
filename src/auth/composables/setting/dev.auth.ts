import { Modules } from "@/auth/enums/module.enum";
import { Auth } from "../../auth";
import { defineAuthKey } from "../authKey";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@/stores/player.store";

const key = defineAuthKey(Modules.Setting, "dev");

export const defineSettingDevEntryAuth = () => {
  const { states } = storeToRefs(usePlayerStore());

  const mount = () => {
    states.value.setting_dev_entry = true;
  };

  const unmount = () => {
    states.value.setting_dev_entry = false;
  };

  return new Auth({ mount, unmount }, key("entry"));
};
