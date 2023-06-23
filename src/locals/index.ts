import { createI18n } from "vue-i18n";
import { useLocalStorage, useNavigatorLanguage } from "@vueuse/core";
import { parseImportModule } from "@/composables/ci/importModule";

// do not forget to export title in langs
const langs = import.meta.glob("#/composables/i18n/langs/*.ts", { eager: true });
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
