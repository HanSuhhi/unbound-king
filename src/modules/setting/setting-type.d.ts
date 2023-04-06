type SettingFooterButton = {
  key: string | string[];
  title: string;
  feedback?: Function;
};

type SettingModule<T = SettingModuleItem> = {
  title: string;
  items: T[];
};
type SettingModuleItem = {
  title: string;
  type: "switch";
  switch?: SettingSwitch;
  index: number;
};
type SettingSwitch = {
  default: import("vue").Ref<boolean>;
  auth: import("@/auth/auth").Auth;
};
