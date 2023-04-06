import type { ComputedRef, Ref } from "vue";
import { inject, ref, watch } from "vue";
import { throttle } from "lodash-es";

const watchRefData = (watchData: Ref, delayShow: Ref) => watch(watchData, throttle((show) => {
  setTimeout(() => {
    delayShow.value = Boolean(show);
  }, 80);
}, 80));;


export const useDelayShowFromInjectData = (injectDataName: string) => {
  const injectShow = inject<Ref<boolean>>(injectDataName)!;
  const delayShow = ref(false);

  watch(injectShow, throttle((show) => {
    setTimeout(() => {
      delayShow.value = show;
    }, 80);
  }, 80));

  return [injectShow, delayShow];
};

export const useDelayShowFromRef = (refData: Ref) => {
  const delayShow = ref(false);

  watchRefData(refData, delayShow);

  return [delayShow];
};