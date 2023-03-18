import { debounce } from "lodash-es";
import { ref, watch } from "vue";

export const autoVModel = <T>(emits: any, defaultValue: T) => {
  const model = ref<T>(defaultValue);

  watch(model, () => emits("update:modelValue", model.value), { deep: true });

  return model;
};
