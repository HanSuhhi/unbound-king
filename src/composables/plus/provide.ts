import { ref, provide } from "vue";

export const useProvide = <T>(key: string, value: T) => {
  const _value = ref(value);

  provide(key, _value);

  return _value;
};
