type SettingModule = {
  title: string;
  auth?: import("@/auth/pageAuth").PageAuth;
  items: SettingModuleItem[];
};

type SettingModuleItem = {
  name: string;
  type: import("./setting.enum").SettingItemType;
  items?: string[];
  comp: any;
};

type SettingFooterButton = {
  key: string | string[];
  title: string;
  feedback?: Function;
};
