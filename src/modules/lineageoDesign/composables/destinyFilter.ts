import type { ComputedRef } from "vue";
import { computed, inject, ref } from "vue";

export function useDestinyFilter() {
  const activeIndex = ref(0);
  const lineageos = inject<ComputedRef<Array<Lineageo>>>("data")!;

  const destinyChoosed = ref<string[]>([]);

  const showLineageos = computed(() => {
    const data = lineageos.value.filter((lineageo) => {
      if (!destinyChoosed.value.length) return lineageos.value;
      return destinyChoosed.value.includes(lineageo.destiny);
    });
    activeIndex.value = 0;
    return data;
  });

  return { destinyChoosed, showLineageos, activeIndex };
}
