import type { Position } from "@vueuse/core";
import { clamp, useElementBounding } from "@vueuse/core";
import type { Ref } from "vue";
import { provide, ref } from "vue";
import { dialogMessage } from "@/composables/components/globalDialog";

function calcCenterPosition(container: Ref, box: Ref): Position {
  const { width: containerWidth, height: containerHeight } = useElementBounding(container);
  const { width: boxWidth, height: boxHeight } = useElementBounding(box);

  return {
    x: containerWidth.value - boxWidth.value,
    y: containerHeight.value - boxHeight.value
  };
}

export function useBoundary(container: Ref, box: Ref) {
  const handle = ref();
  provide("handle", handle);

  const { x, y } = calcCenterPosition(container, box);

  const restrictedX = ref(x);
  const restrictedY = ref(y);

  const { left, right, top, bottom } = useElementBounding(container);
  const { width, height } = useElementBounding(dialogMessage.value?.headerAsBody ? handle : box);
  const draggableBoundary = ({ x, y }: Position) => {
    restrictedX.value = clamp(left.value, x, right.value - width.value);
    restrictedY.value = clamp(top.value, y, bottom.value - height.value);
  };
  provide("boundary", draggableBoundary);

  return [restrictedX, restrictedY];
}
