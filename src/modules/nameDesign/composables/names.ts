import { isUndefined } from "lodash";
import { computed, provide, ref, watch } from "vue";
import { DATA } from "../../../composables/data";

export function useNames() {
  const familyNames = ref<FamilyName[]>(DATA.FamilyNames);

  const firstNames = ref<FirstName[]>(DATA.FirstNames);
  const changed = ref();

  provide("family-names", familyNames);
  provide("first-names", firstNames);

  const _code = ref();
  const defineCode = () => {
    if (isUndefined(changed.value)) changed.value = false;
    else changed.value = true;
    _code.value = `export const DATA_FamilyNames: FamilyName[] = ${JSON.stringify(familyNames.value)};
   export const DATA_FirstNames: FirstName[] = ${JSON.stringify(firstNames.value)}`;
  };

  const code = computed(() => (_code.value));

  watch(() => familyNames.value.length, defineCode);
  watch(() => firstNames.value.length, defineCode, { immediate: true });

  provide("code", code);
  provide("changed", changed);

  return { code };
}
