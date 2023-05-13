import { computed, ref, watch } from "vue";
import { map } from "lodash-es";
import { useI18n } from "vue-i18n";
import { immediate } from "@/composables/plus/watch";

export function useLocale() {
  const { messages, locale } = useI18n();

  // auto set locale to storage
  watch(locale, (newLocale) => {
    localStorage.setItem("locale", newLocale);
  }, immediate);

  // selecter options
  const value = ref(locale);
  const options = computed(() => map(messages.value, (message, key) => ({
    label: message.title as string,
    value: key
  })));

  return { value, options };
}
