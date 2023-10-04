import type { FormInst, FormRules } from "naive-ui";
import { provide, ref } from "vue";
import { RegistCharacterFormRef, RegistCharacterFormValue } from "../regist-character.symbol";
import { Gender } from "@/configs/gender/gender.enum";
import { Profession } from "@/configs/professions/profession.enum";
import { HumanLineage } from "@/configs/lineages/lineages.enum";
import { Race } from "@/configs/races/race.enum";
import { Trait } from "@/configs/traits/trait.enum";

export function useRegistCharacterForm() {
  const FormRef = ref<FormInst | null>(null);
  provide(RegistCharacterFormRef, FormRef);

  const registCharacterForm = ref<Character>({
    name: "",
    gender: Gender.Male,
    profession: Profession.Farmer,
    traits: [Trait.Listener, Trait.Claim],
    race: Race.Human,
    lineage: HumanLineage.PlainSettler
  });
  provide(RegistCharacterFormValue, registCharacterForm);

  const rules = ref<FormRules>({
    name: {
      required: true,
      message: " ",
      min: 2,
      max: 6,
      trigger: "blur"
    },
    gender: {
      required: true,
      message: " ",
      trigger: ["input"]
    },
    profession: {
      required: true,
      message: " ",
      trigger: ["input"]
    },
    race: {
      required: true,
      message: " ",
      trigger: ["input"]
    },
    traits: {
      required: true,
      message: " ",
      trigger: ["input"]
    },
    lineage: {
      required: true,
      message: " ",
      trigger: ["input"]
    }
  });

  return {
    FormRef,
    registCharacterForm,
    rules
  };
}
