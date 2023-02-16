/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SETTING_HEADER_LIST_MAX_NUM: string;
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
