import type { FormRules } from "element-plus";
import { computed } from "vue";

export const defineAutoFormRules = (props: any) => {
  const rules = computed(() => {
    const rule: FormRules = {};
    props.config.forEach((formItem: any) => {
      if (formItem.rules) rule[formItem.key] = formItem.rules;
    });
    return rule;
  });

  return { rules };
};
