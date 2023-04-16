import { computed } from "vue";
import typeString from "../destiny-data.d.ts?raw";
import { colorFormConfig, iconFormConfig } from "../../../composables/form/formConfigs";
import { hideFormConfig, translatorFormConfig } from "@/composables/form/formConfigs";
import { withFormDetail } from "@/composables/form/formDetail";
import { transformTypeToForm } from "@/composables/form/typeToForm";

export function useForm(destiny: Destiny) {
  const formConfig = computed(() => {
    return withFormDetail<Destiny>(transformTypeToForm(typeString), {
      ...translatorFormConfig,
      ...iconFormConfig,
      ...colorFormConfig,
      description: { title: "说明", type: "textarea" },
      main: hideFormConfig,
      origin: hideFormConfig
    });
  }
  );

  formConfig.value.forEach((config) => {
    config.defaultValue = destiny[config.key as keyof Destiny];
  });

  return formConfig;
}
