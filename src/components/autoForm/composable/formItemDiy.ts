import { ref, watch } from "vue";

export function userAutoVModel<T>(emits: any, defaultValue: T) {
  const model = ref<T | undefined>(defaultValue || undefined);

  watch(model, () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    emits("update:modelValue", model.value || "");
  }, { deep: true });

  return model;
}
