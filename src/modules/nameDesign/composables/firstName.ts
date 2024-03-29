import { includes, throttle } from "lodash";
import { useMessage } from "naive-ui";
import type { Ref } from "vue";
import { inject } from "vue";
import { TRANSITION_DURATION } from "@/composables/constant/env";

export function useFirstName(nameModel: Ref, gender?: Gender, chase?: Chase) {
  const firstNames = inject<Ref<FirstName[]>>("first-names");
  const message = useMessage();

  const addFirstName = throttle(() => {
    const value = nameModel.value;
    nameModel.value = "";
    if (!value) return;
    const haveSameName = includes(
      firstNames?.value.map(firstName => firstName.name),
      value
    );
    if (haveSameName) return message.info("已有相同名辞");
    firstNames?.value.push({ chase, gender, name: value });
  }, TRANSITION_DURATION);

  const removeFirstName = (name: string) => {
    const index = firstNames?.value.findIndex((firstName) => {
      const sameChase = firstName.chase === chase;
      const sameGender = firstName.gender === gender;
      const sameName = firstName.name === name;

      if (sameChase && sameGender && sameName) return firstName;
    });
    if (index !== undefined && index !== -1) firstNames?.value.splice(index, 1);
  };

  return { addFirstName, removeFirstName };
}
