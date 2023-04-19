import type { Ref } from "vue";
import { inject } from "vue";
import { useProvide } from "../plus/provide";

export function defineCommonDialog() {
  const modalShow = useProvide("modal", false);

  return { modalShow };
}

export function getCommonDialog() {
  const modal = inject<Ref<boolean>>("modal")!;
  return { modal };
}
