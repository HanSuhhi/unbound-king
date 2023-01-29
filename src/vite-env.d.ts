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
