import type { Ref } from "vue";
import { inject, ref, watch } from "vue";
import { deepImmediate } from "../../../composables/plus/watch";

export function defineDataKey({ gender, chase }: { gender?: Gender; chase?: Chase }) {
  if (gender && chase) return `${gender.toLowerCase()}${chase}`;
  if (gender && !chase) return `${gender.toLowerCase()}`;
  if (!gender && chase) return `${chase.toLowerCase()})`;
  return "empty";
}

export function useFilterFirstNames() {
  const firstNames = inject<Ref<FirstName[]>>("first-names");
  const genders = ref<Gender[]>(["FEMALE", "MALE"]);
  const chases = ref<Chase[]>(["release", "immortality", "AI"]);

  const filter = ({ gender, chase }: { gender?: Gender; chase?: Chase }) => {
    if (gender && chase) return firstNames?.value!.filter(firstName => firstName.chase === chase && firstName.gender === gender);
    if (gender && !chase) return firstNames?.value!.filter(firstName => firstName.gender === gender && !firstName.chase);
    if (!gender && chase) return firstNames?.value!.filter(firstName => firstName.chase === chase && !firstName.gender);
    return firstNames?.value!.filter(firstName => !firstName.chase && !firstName.gender);
  };
  const filterNames = ref<Record<string, FirstName[]>>({});

  const filterAllFirstNames = () => {
    chases.value.forEach((chase) => {
      const key = defineDataKey({ chase });
      filterNames.value[key] = filter({ chase }) || [];
    });
    genders.value.forEach((gender) => {
      const key = defineDataKey({ gender });
      filterNames.value[key] = filter({ gender }) || [];
    });

    filterNames.value[defineDataKey({})] = filter({}) || [];
  };
  watch(firstNames!, filterAllFirstNames, deepImmediate);

  return { filterNames, genders, chases };
}
