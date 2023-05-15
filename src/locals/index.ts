import { createI18n } from "vue-i18n";
import { parseImportModule } from "@/composables/ci/importModule";

// do not forget to export title in langs
const langs = import.meta.glob("./langs/*.ts", { eager: true });
const messages = parseImportModule(langs, true);

const storageLocale = localStorage.getItem("locale");
const browerLocale = navigator.language.toLowerCase() || import.meta.env.I18N_DEFAULT_LANG;

const locale = storageLocale || browerLocale || import.meta.env.I18N_DEFAULT_LANG;

export function defineI18n() {
  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: "en-us",
    messages
  });

  return i18n;
}

export function I18N() {

}
