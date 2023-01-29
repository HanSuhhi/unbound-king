import { forEach } from "lodash-es";
import type { StyleValue } from "vue";
import { ref, watch } from "vue";

export const InitElementStyle = (css: StyleValue) => {
  const component = ref<HTMLElement>();

  const init = watch(component, (nv) => {
    if (nv) {
      forEach(css as any, (v, k) => {
        component.value?.style.setProperty(k, v);
      });

      init();
    }
  });

  return [component];
};
