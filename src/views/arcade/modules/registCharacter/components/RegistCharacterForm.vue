<script setup lang='ts'>
import type { FormInst } from "naive-ui";
import { NForm } from "naive-ui";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import GenderSelecter from "./GenderSelecter.vue";
import NameInput from "./NameInput.vue";
import ProfessionSelecter from "./ProfessionSelecter.vue";
import TraitSelecter from "./TraitSelecter.vue";
import RaceSelecter from "./RaceSelecter.vue";
import LineageSelecter from "./LineageSelecter.vue";
import FormButtons from "./FormButtons.vue";
import { ElvesLineage, HumanLineage, YokaiLineage } from "#/server/modules/lineages/enums/lineage.enum";
import { Gender } from "#/server/modules/gender/enums/gender.enum";
import type { ResponseType_PostRegist } from "@/api/services/character";
import { Profession } from "#/server/modules/professions/enums/profession.enum";
import { Trait } from "#/server/modules/traits/enums/trait.enum";
import { Race } from "#/server/modules/races/enums/race.enum";

const { t } = useI18n();

const FormRef = ref<FormInst | null>(null);

const registCharacterForm = ref<ResponseType_PostRegist>({
  name: "",
  gender: Gender.Male,
  profession: Profession.Sworder,
  traits: [Trait.Listener],
  race: Race.Humans,
  lineage: HumanLineage.Caveman
});

watch(() => registCharacterForm.value.race, (newRace) => {
  switch (newRace) {
    case Race.Yokai:
      registCharacterForm.value.lineage = YokaiLineage.Fish;
      break;
    case Race.Elves:
      registCharacterForm.value.lineage = ElvesLineage.Tree;
      break;
    case Race.Humans:
    default:
      registCharacterForm.value.lineage = HumanLineage.Caveman;
      break;
  }
}, { immediate: true });
</script>

<template>
  <n-form
    ref="FormRef"
    label-placement="left"
    :model="registCharacterForm"
  >
    <name-input v-model="registCharacterForm.name" />
    <gender-selecter v-model="registCharacterForm.gender" />
    <profession-selecter v-model="registCharacterForm.profession" />
    <trait-selecter v-model="registCharacterForm.traits" />
    <race-selecter v-model="registCharacterForm.race" />
    <lineage-selecter v-model="registCharacterForm.lineage" :race="registCharacterForm.race" />
    <form-buttons v-model="registCharacterForm" />
  </n-form>
</template>
