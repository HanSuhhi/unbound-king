import { PageAuth } from "../pageAuth";
import { settingAuth } from "../auth";

class SettingAuth extends PageAuth {
  constructor(page: AuthPageType, func: string = "entry") {
    super(settingAuth, "dev", func);
  }
}

export const entryDevSettingAuth = new SettingAuth("dev");
