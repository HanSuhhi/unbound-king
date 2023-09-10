import type { SelectOption } from "naive-ui";
import { useI18n } from "vue-i18n";

export function getOptions(options: SelectOption[]) {
  const { t } = useI18n();
  return options.map((option) => {
    option.label = t(option.label as string);
    return option;
  });
}
