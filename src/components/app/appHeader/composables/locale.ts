import type { ComputedRef, Ref } from "vue";
import { computed, ref, watch } from "vue";
import { delay, map } from "lodash-es";
import { useI18n } from "vue-i18n";
import type { SelectOption } from "naive-ui";
import { animationDuration } from "../../../../composables/constant/env";
import { definePressed } from "@/composables/key/keyEvent";
import { mountKeyCommand } from "@/composables/key/mountKeyCommand";

export type I18nOption = SelectOption & { hotkey: string };

function bindOptionHotkey(options: ComputedRef<any[]>, locale: Ref) {
  options.value.forEach((option: I18nOption) => {
    const { hotkey, label, value: optionValue } = option;
    const keyEvent: KeyEvent = {
      key: hotkey,
      translator: [label as string, optionValue as string],
      fn: definePressed(() => locale.value = optionValue as string)
    };

    mountKeyCommand(keyEvent);
  });
}

export function useLocale(toggle: () => boolean) {
  const { messages, locale } = useI18n();

  // auto set locale to storage
  watch(locale, (newLocale) => {
    localStorage.setItem("locale", newLocale);
    delay(toggle, animationDuration / 8);
  });

  // selecter options
  const value = ref(locale);
  const options = computed(() => map(messages.value, (message, key) => ({
    label: message.title as string,
    value: key,
    hotkey: message.hotkey
  })));

  bindOptionHotkey(options, value);

  return { value, options };
}
