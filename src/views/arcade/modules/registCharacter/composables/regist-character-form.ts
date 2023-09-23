import type { FormInst, FormRules } from "naive-ui";
import { provide, ref } from "vue";
import { RegistCharacterFormRef } from "../regist-character.symbol";
import { Gender } from "#/server/modules/gender/enums/gender.enum";
import { Profession } from "#/server/modules/professions/enums/profession.enum";
import { Race } from "#/server/modules/races/enums/race.enum";
import { Trait } from "#/server/modules/traits/enums/trait.enum";
import type { ResponseType_PostRegist } from "@/api/services/character";
import { HumanLineage } from "#/server/modules/lineages/enums/human-lineage.enum";

export function useRegistCharacterForm() {
  const FormRef = ref<FormInst | null>(null);
  provide(RegistCharacterFormRef, FormRef);

  const registCharacterForm = ref<ResponseType_PostRegist>({
    name: "",
    gender: Gender.Male,
    profession: Profession.Sworder,
    traits: [Trait.Listener, Trait.Claim],
    race: Race.Human,
    lineage: HumanLineage.PlainSettler
  });

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
