/// <reference types="vite/client" />


declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}


interface ImportMetaEnv {
  readonly DEFAULT_ROUTE_INDEX: string;
  readonly PARAM_SETTING_CHARACTER_WEIGHT_DEFAULT_MAX: string;
  readonly PROJECT_NAME: string;
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
type Color = [color1: string, color2: string];
type MinMax = [min: number, max: number];
type BaseCard = {
  translator: Translator;
  description: string;
  icon: Icon;
  color?: Color;
}
type Dictionary<T> = Record<string, T>;
type BaseItem = {
  icon?: Icon;
  translator: Translator;
  description: string;
}

type TranslatorObj = { translator: Translator };
type CanBeGenerated = { canBeGenerated: boolean };
type NotBeGenerated = { notBeGenerated: boolean };
type NeedDescription = { description: string };
type NeedIcon = { icon: Icon }

type Gender = keyof typeof import("@/modules/character/enums/character.enum")['DATA_Genders'];
type Chase = keyof typeof import("@/modules/character/enums/character.enum")['DATA_Chases'];
type Age = keyof typeof import("@/modules/character/enums/character.enum")['DATA_Ages'];
type Data = keyof typeof import("@/composables/data")["DATA"];

interface ModuleArray<T> { default: Array<T> }
