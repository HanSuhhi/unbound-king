import type { UnwrapRef } from "vue";
import { customRef, readonly, ref } from "vue";
import { TRANSITION_DURATION } from "../constant/env";

export function debouncedRef<T>(value: T, delay = TRANSITION_DURATION) {
  let timeout: NodeJS.Timeout;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      }
    };
  });
}

export function refUpdate<T>(value: T, options = {
  readonly: false
}) {
  const _value = ref(value);

  const update = (data: UnwrapRef<T>) => {
    console.log("🚀 ~ file: ref.ts:31 ~ update ~ _value.value:", _value.value);
    _value.value = data;
  };

  return {
    value: options.readonly ? readonly(_value) : _value,
    update
  };
}
