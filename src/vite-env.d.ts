/// <reference types="vite/client" />


declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}


interface ImportMetaEnv {
  readonly ROUTER_DEFAULT_PAGE: string;
  readonly I18N_DEFAULT_LANG: string;
  readonly PROJECT_NAME: string;
  readonly STYLE_HEADER_HEIGHT: string;
  readonly STYLE_ASIDE_WIDTH: string;
  readonly STYLE_ASIDE_MODULES_WIDTH: string;
  readonly STYLE_COLLAPSE_WIDTH: string;
  readonly STYLE_ANIMATION_DURATION: string;
  readonly STYLE_EXTEND_WIDTH: string;
  readonly BUILD_ENCRYPTED_KEY: string;
  readonly BUILD_IV: string;
  readonly STYLE_BASE_FONT_SIZE: string;
  readonly EMAIL: string;
  readonly SERVER_RUNNING_PORT: string;
}

interface ErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}

/**
 * @todo transform to string only and support i18n
 */
type Translator = [key: string, title: string] | string;
type Color = [color1: string, color2: string];
type MinMax = [min: number, max: number];
type From = string;
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
