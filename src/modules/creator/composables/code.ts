import { computed, provide, ref } from "vue";

export function useCode() {
  const _code = ref("");
  const code = computed({
    get: () => _code.value,
    set: (code: string) => (_code.value = (`export default <Creator>${code}`))
  });

  provide("code", code);

  return [code];
}
