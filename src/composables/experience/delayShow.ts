import type { ComputedRef, Ref } from "vue";
import { inject, ref, watch, nextTick } from 'vue';
import { defer, throttle } from "lodash-es";

const watchRefData = (watchData: Ref, delayShow: Ref, immediate = false) => watch(watchData, throttle((show) => {
  nextTick(() => delayShow.value = Boolean(show));
}, 80), { immediate });

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

  watchRefData(refData, delayShow, true);

  return [delayShow];
};