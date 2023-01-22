import { PageAuth } from "../pageAuth";
import { settingAuth } from "../auth";

class SettingAuth extends PageAuth {
  constructor(func: string = "entry") {
    super(settingAuth, "setting", func);
  }
}

export const entrySettingAuth = new SettingAuth();
