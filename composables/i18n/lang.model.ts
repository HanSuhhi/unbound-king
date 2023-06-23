import type { I18N } from "./langs/en-us";

export function defineLang(message: I18N, title: string) {
  Reflect.setPrototypeOf(message, { title });
  return message;
}
