type SettingModule = {
  title: string;
  auth?: import("@/auth/pageAuth").PageAuth;
  password?: string;
  items: SettingModuleItem[];
};

type SettingModuleItem = {
  name: string;
  type: import("./enums/setting.enum").SettingItemType;
  items?: string[];
  comp: any;
};
