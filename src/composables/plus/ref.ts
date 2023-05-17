import { customRef } from "vue";
import { animationDuration } from "../constant/env";

export function debouncedRef<T>(value: T, delay = animationDuration) {
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
