import type { Position } from "@vueuse/core";
import { useElementBounding, clamp } from "@vueuse/core";
import type { Ref } from "vue";
import { ref, provide } from "vue";

export const useBoundary = (container: Ref, box: Ref, headerAsBody: boolean) => {
  const handle = ref();
  provide("handle", handle);

  const restrictedX = ref(500);
  const restrictedY = ref(500);
  provide("x", restrictedX);
  provide("y", restrictedY);

  const { left, right, top, bottom } = useElementBounding(container);
  const { width, height } = useElementBounding(headerAsBody ? handle : box);
  const draggableBoundary = ({ x, y }: Position) => {
    restrictedX.value = clamp(left.value, x, right.value - width.value);
    restrictedY.value = clamp(top.value, y, bottom.value - height.value);
  };
  provide("boundary", draggableBoundary);

  return [restrictedX, restrictedY];
};