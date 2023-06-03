import { createI18n, useI18n } from "vue-i18n";
import { useLocalStorage, useNavigatorLanguage } from "@vueuse/core";
import enUs from "./langs/en-us";
import { parseImportModule } from "@/composables/ci/importModule";

// do not forget to export title in langs
const langs = import.meta.glob("./langs/*.ts", { eager: true });
const messages = parseImportModule(langs, true);

const browerLocale = useNavigatorLanguage().language.value || import.meta.env.I18N_DEFAULT_LANG;
const storageLocale = useLocalStorage("locale", browerLocale);

const locale = storageLocale.value || browerLocale || import.meta.env.I18N_DEFAULT_LANG;

export function defineI18n() {
  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: "en-us",
    messages
  });

  return i18n;
}

export function useBaseI18n() {
  const { t } = useI18n();
  const tt = (key: string) => t(key);

  return tt;
}

function createI18nLangModel(obj: I18N) {
  const result = {};
  function traverse(currentObj: I18N, path: string, resultObj: Dictionary<{}>) {
    for (const key in currentObj) {
      const value = (currentObj as unknown as Dictionary<string>)[key];
      if (typeof value === "object") {
        resultObj[key] = {};
        traverse(value, `${path}${key}.`, resultObj[key]);
      }
      else {
        resultObj[`${key}`] = `${path}${key}`;
      }
    }
  }

  traverse(obj, "", result);
  return result;
}
export const i18nLangModel = createI18nLangModel(enUs) as I18N;
