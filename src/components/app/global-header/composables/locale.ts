import type { ComputedRef, Ref } from "vue";
import { computed, ref, watch } from "vue";
import { delay, map } from "lodash";
import { useI18n } from "vue-i18n";
import type { SelectOption } from "naive-ui";
import { TRANSITION_DURATION } from "../../../../composables/constant/env";
import { definePressed } from "@/composables/experience/key/keyEvent";
import { createAutoMountEvent } from "@/composables/experience/key/mountKeyCommand";

export type I18nOption = SelectOption & { hotkey: string };

function bindOptionHotkey(options: ComputedRef<any[]>, locale: Ref, control: Ref<boolean>) {
  options.value.forEach((option: I18nOption) => {
    const { hotkey, label, value: optionValue } = option;
    createAutoMountEvent(control)({
      key: hotkey,
      translator: label as string,
      fn: definePressed(() => locale.value = optionValue as string)
    });
  });
}

export function useLocale(toggle: () => boolean, control: Ref<boolean>) {
  const { messages, locale } = useI18n();

  // auto set locale to storage
  watch(locale, (newLocale) => {
    localStorage.setItem("locale", newLocale.toLowerCase());
    delay(toggle, TRANSITION_DURATION / 8);
  });

  // selecter options
  const value = ref(locale);
  const options = computed(() => map(messages.value, (message, key) => ({
    label: message.title as string,
    value: key,
    hotkey: message.hotkey
  })));

  // bind hotkey
  bindOptionHotkey(options, value, control);

  return { value, options };
}
