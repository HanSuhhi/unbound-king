import { useProvide } from "./provide";
import type { Ref } from "vue";
import { inject } from "vue";

export const provideLoading = () => useProvide("loading", false);

export const injectLoading = () => inject<Ref<boolean>>("loading")!;
