import type { Ref } from "vue";
import { computed } from 'vue';

export const useDeconstructComponent = <T extends CsssAPI>(COMP: Ref) => {
  const state = computed(() => COMP.value?.state as T['state']);
  const read = computed(() => COMP.value?.read as T['read']);
  const style = computed(() => COMP.value?.style as T['style']);

  return { state, read, style };
};