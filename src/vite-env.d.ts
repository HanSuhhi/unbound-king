/// <reference types="vite/client" />


declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}


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

type KeyEvent = {
  key: string;
  translator: Translator;
  fn: (isPressed) => void;
}

type Translator = [key: string, title: string];
type Dictionary<T> = Record<string, T>;
type BaseItem = {
  icon?: Icon;
  translator: Translator;
  description: string;
}


type TranslatorObj = { translator: Translator };
type CanBeGenerated = { canBeGenerated: boolean };
type NeedDescription = { description: string };
type NeedIcon = { icon: Icon }

type Gender = keyof typeof import("@/modules/character/enums/character.enum")['DATA_Genders'];
type Chase = keyof typeof import("@/modules/character/enums/character.enum")['DATA_Chases'];
type Age = keyof typeof import("@/modules/character/enums/character.enum")['DATA_Ages'];
type Data = keyof typeof import("@/composables/data")["DATA"];
