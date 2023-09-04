<script setup lang='ts'>
import type { FormInst } from "naive-ui";
import { NForm, NFormItem } from "naive-ui";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import GenderSelecter from "./GenderSelecter.vue";
import NameInput from "./NameInput.vue";
import ProfessionSelecter from "./ProfessionSelecter.vue";
import PersonalitySelecter from "./PersonalitySelecter.vue";
import TraitSelecter from "./TraitSelecter.vue";
import RaceSelecter from "./RaceSelecter.vue";
import { Gender } from "#/server/modules/gender/enums/gender.enum";
import type { ResponseType_PostRegist } from "@/api/services/character";
import { i18nLangModel } from "#/composables/i18n/index";
import { Profession } from "#/server/modules/professions/enums/profession.enum";
import { Personality } from "#/server/modules/personalities/enums/personality.enum";
import { Trait } from "#/server/modules/traits/enums/trait.enum";
import { Race } from "#/server/modules/races/enums/race.enum";
import { HumanLineage } from "#/server/modules/lineages/enums/lineage.enum";

const { t } = useI18n();

const FormRef = ref<FormInst | null>(null);

const registCharacterForm = ref<ResponseType_PostRegist>({
  name: "",
  gender: Gender.Male,
  profession: Profession.Sworder,
  personality: Personality.Brave,
  traits: [Trait.Listener],
  race: Race.Humans,
  lineage: HumanLineage.Caveman
});
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
    <personality-selecter v-model="registCharacterForm.personality" />
    <trait-selecter v-model="registCharacterForm.traits" />
    <race-selecter v-model="registCharacterForm.race" />

    <n-form-item :label="t(i18nLangModel.arcade.regist_character.lineage)" path="lineage">
      <h1>gender</h1>
    </n-form-item>
  </n-form>
</template>
