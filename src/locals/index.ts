import { createI18n } from "vue-i18n";
import { useNavigatorLanguage } from "@vueuse/core";
import { parseImportModule } from "@/composables/ci/importModule";
import { I18N_DEFAULT_LANG, IS_SSR } from "@/composables/constant/env";

// do not forget to export title in langs
const messages = parseImportModule(import.meta.glob("#/composables/i18n/langs/*.ts", { eager: true }), true);

const browerLocale = useNavigatorLanguage().language.value;
const storageLocale = IS_SSR ? "" : (localStorage.getItem("locale") || "");

const locale = storageLocale || browerLocale?.toLowerCase() || I18N_DEFAULT_LANG;

export const i18n = createI18n({
  globalInjection: true,
  locale,
  legacy: false,
  fallbackLocale: "en-us",
  messages
});
