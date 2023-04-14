import type { Ref } from "vue";
import { inject } from "vue";
import { useProvide } from "./provide";

export function provideLoading() {
  return useProvide("loading", false);
}

export function injectLoading() {
  return inject<Ref<boolean>>("loading")!;
}
