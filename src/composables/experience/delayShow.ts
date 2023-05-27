import type { Ref } from "vue";
import { inject, nextTick, ref, watch } from "vue";
import { throttle } from "lodash";

function watchRefData(watchData: Ref, delayShow: Ref, immediate = false) {
  return watch(watchData, throttle((show) => {
    nextTick(() => delayShow.value = Boolean(show));
  }, 80), { immediate });
}

export function useDelayShowFromInjectData(injectDataName: string) {
  const injectShow = inject<Ref<boolean>>(injectDataName)!;
  const delayShow = ref(false);

  watch(injectShow, throttle((show) => {
    setTimeout(() => {
      delayShow.value = show;
    }, 80);
  }, 80));

  return [injectShow, delayShow];
}

export function useDelayShowFromRef(refData: Ref) {
  const delayShow = ref(false);

  watchRefData(refData, delayShow, true);

  return [delayShow];
}
