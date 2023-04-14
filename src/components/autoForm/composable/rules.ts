import type { FormRules } from "naive-ui";
import { computed } from "vue";

export function defineAutoFormRules(props: { config: AutoformItem[]; params?: any }) {
  const rules = computed(() => {
    const rule: FormRules = {};
    props.config.forEach((formItem: AutoformItem) => {
      if (formItem.rules) rule[formItem.key] = formItem.rules;
    });
    return rule;
  });

  return { rules };
}
