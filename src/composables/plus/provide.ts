import type { UnwrapRef } from "vue";
import { provide, readonly, ref } from "vue";

export function useProvide<T>(key: string | Symbol, value?: T) {
  const _value = ref(value);

  const update = (data: UnwrapRef<T>) => {
    _value.value = data;
  };

  const provideValue = {
    value: readonly(_value),
    update
  };

  provide(key, provideValue);
  return provideValue;
}

export type ProvideProps<T> = ReturnType<typeof useProvide<T>>;
