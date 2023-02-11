type SettingTitleModule = {
  title: string;
  auth?: boolean;
  items: SettingTitleModuleItem[];
};

type SettingTitleModuleItem = {
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

type SettingModule = {
  title: string;
  items: SettingModuleItem[];
};
type SettingModuleItem = {
  title: string;
  type: "switch";
  prop?: Record;
};
