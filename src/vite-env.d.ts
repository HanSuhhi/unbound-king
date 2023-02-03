/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SETTING_HEADER_LIST_MAX_NUM: string;
}

type ModuleList = {
  path?: string;
  name?: string;
  icon?: string;
  children?: ModuleList[];
};

type Size = "small" | "normal" | "large";

type KeyCommand = {
  /**
   * @description which key to watch
   * @description if begin with "_", means watch all keys
   */
  key: string;
  fn: Function;
};
