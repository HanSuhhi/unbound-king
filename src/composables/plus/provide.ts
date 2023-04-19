import { provide, ref } from "vue";

export function useProvide<T>(key: string, value: T) {
  const _value = ref(value);

  provide(key, _value);

  return _value;
}
