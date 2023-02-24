/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PROJECT_NAME: string;
  readonly SETTING_HEADER_LIST_MAX_NUM: string;
  readonly ASIDE_WIDTH: string;
}

type Size = "small" | "normal" | "large";

type KeyCommand = {
  /**
   * @description which key to watch
   * @description if begin with "_", means watch all keys
   */
  key: string;
  fn: (isPressed) => void;
};
