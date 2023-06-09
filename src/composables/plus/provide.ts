import { provide, readonly } from "vue";
import { refUpdate } from "./ref";

export function useProvide<T>(key: string | Symbol, value?: T, options = {
  readonly: true
}) {
  const { value: _value, update } = refUpdate(value);

  const provideValue = {
    value: options.readonly ? readonly(_value) : _value,
    update
  };

  provide(key, provideValue);
  return provideValue;
}

export type ProvideProps<T> = ReturnType<typeof useProvide<T>>;
