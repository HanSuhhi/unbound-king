import { animationDuration } from "@/composables/constant/env";
import { throttle, includes } from "lodash-es";
import { useMessage } from "naive-ui";
import type { Ref } from "vue";
import { inject } from "vue";

export const useFamilyNames = (nameModel: Ref) => {
  const familyNames = inject<Ref<FamilyName[]>>("family-names");
  const message = useMessage();

  const addFamilyName = throttle(() => {
    const value = nameModel.value;
    nameModel.value = "";
    if (!value) return;
    if (includes(familyNames?.value, value)) return message.info("已有相同姓氏");
    familyNames?.value.push(value);
  }, animationDuration);

  const removeFamilyName = (index: number) => {
    familyNames?.value.splice(index, 1);
  };

  return [addFamilyName, removeFamilyName];
};
