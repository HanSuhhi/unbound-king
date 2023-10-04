<script setup lang='ts'>
import { NForm } from "naive-ui";
import { watch } from "vue";
import { useRegistCharacterForm } from "../composables/regist-character-form";
import GenderSelecter from "./GenderSelecter.vue";
import NameInput from "./NameInput.vue";
import ProfessionSelecter from "./ProfessionSelecter.vue";
import TraitGetter from "./TraitGetter.vue";
import RaceSelecter from "./RaceSelecter.vue";
import LineageSelecter from "./LineageSelecter.vue";
import FormButtons from "./FormButtons.vue";
import { Race } from "@/configs/races/race.enum";
import { ElvesLineage, HumanLineage, YokaiLineage } from "@/configs/lineages/lineages.enum";

const { FormRef, registCharacterForm, rules } = useRegistCharacterForm();

watch(() => registCharacterForm.value.race, (newRace) => {
  switch (newRace) {
    case Race.Yokai:
      registCharacterForm.value.lineage = YokaiLineage.Fish;
      break;
    case Race.Elves:
      registCharacterForm.value.lineage = ElvesLineage.Tree;
      break;
    case Race.Human:
    default:
      registCharacterForm.value.lineage = HumanLineage.PlainSettler;
      break;
  }
}, { immediate: true });
</script>

<template>
  <n-form
    ref="FormRef"
    class="regist-character-form"
    label-placement="left"
    :rules="rules"
    :model="registCharacterForm"
  >
    <name-input v-model="registCharacterForm.name" />
    <gender-selecter v-model="registCharacterForm.gender" />
    <race-selecter v-model="registCharacterForm.race" />
    <lineage-selecter v-model="registCharacterForm.lineage" :race="registCharacterForm.race" />
    <profession-selecter v-model="registCharacterForm.profession" />
    <trait-getter v-model="registCharacterForm.traits" class="regist-character-form_traits" />
    <form-buttons v-model="registCharacterForm" />
  </n-form>
</template>

<style scoped>
.regist-character-form {
  width: inherit;
}

.regist-character-form_traits:deep(.n-form-item-blank) {
  display: flex;
  justify-content: space-between;
}
</style>
