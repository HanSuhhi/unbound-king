import type { ComputedRef } from "vue";
import { inject } from "vue";

export function useDesignData<T>() {
  const data = inject<ComputedRef<T[]>>("data")!;

  return data;
}
