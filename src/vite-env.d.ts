/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PROJECT_NAME: string;
  readonly SETTING_HEADER_LIST_MAX_NUM: string;
  readonly ASIDE_WIDTH: string;
  readonly ASIDE_MODULES_WIDTH: string;
  readonly BOX_COLLAPSE_WIDTH: string;
  readonly ANIMATION_DURATION: string;
  readonly BOX_EXTEND_WIDTH: string;
  readonly ENCRYPTED_KEY: string;
  readonly IV: string;
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

type TabListItem = {
  icon?: BaseIconName;
  index: number;
  injectData?: any;
  key: string;
  name: string;
};

type Translator = {
  name: string | Ref<string>;
  title: string | Ref<string>;
};

type IdValue<T> = Record<string, T>;
