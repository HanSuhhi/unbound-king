import { customRef } from "vue";
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
