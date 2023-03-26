import { formatCodeString } from "@/composables/formatCodeString";
import { provide, ref, watch, computed } from "vue";
import { DATA_FamilyNames, DATA_FirstNames } from "../data/name.data";
import { isUndefined } from "lodash-es";

export const useNames = () => {
  const familyNames = ref<FamilyName[]>(DATA_FamilyNames);
  const firstNames = ref<FirstName[]>(DATA_FirstNames);
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

  const code = computed(() => formatCodeString(_code.value));

  watch(() => familyNames.value.length, defineCode);
  watch(() => firstNames.value.length, defineCode, { immediate: true });

  provide("code", code);
  provide("changed", changed);

  return { code };
};
