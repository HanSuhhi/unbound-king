import { includes, throttle } from "lodash";
import { useMessage } from "naive-ui";
import type { Ref } from "vue";
import { inject } from "vue";
import { TRANSITION_DURATION } from "@/composables/constant/env";

export function useFamilyNames(nameModel: Ref<string>) {
  const familyNames = inject<Ref<FamilyName[]>>("family-names");
  const message = useMessage();

  const addFamilyName = throttle(() => {
    const value = nameModel.value;
    nameModel.value = "";
    if (!value) return;
    if (includes(familyNames?.value, value)) return message.info("已有相同姓氏");
    familyNames?.value.push(value);
  }, TRANSITION_DURATION);

  const removeFamilyName = (index: number) => {
    familyNames?.value.splice(index, 1);
  };

  return { addFamilyName, removeFamilyName };
}
