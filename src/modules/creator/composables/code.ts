import { computed, provide, ref } from "vue";
import { formatCodeString } from "../../../composables/ci/codeString";

export function useCode() {
  const _code = ref("");
  const code = computed({
    get: () => _code.value,
    set: (code: string) => (_code.value = formatCodeString("export default <Creator>", code))
  });

  provide("code", code);

  return [code];
}
