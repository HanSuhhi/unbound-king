<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { NFormItem, NSelect } from "naive-ui";
import { useRegistCharacterRaceOptions } from "../composables/race-option";
import { i18nLangModel } from "#/composables/i18n/index";

const { t, locale } = useI18n();
const raceRef = defineModel<Race>();
const { raceOptions } = await useRegistCharacterRaceOptions(locale, t);
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.race)" path="race">
    <n-select v-model:value="raceRef" :options="raceOptions" />
  </n-form-item>
</template>
