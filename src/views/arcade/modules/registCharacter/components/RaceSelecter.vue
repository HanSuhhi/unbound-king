<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { NFormItem, NSelect } from "naive-ui";
import { useRaceOptions } from "../composables/raceOption";
import { i18nLangModel } from "#/composables/i18n/index";
import type { ResponseType_PostRegist } from "@/api/services/character";

const { t } = useI18n();
const raceRef = defineModel<ResponseType_PostRegist["race"]>();
const { raceOptions } = await useRaceOptions();
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.race)" path="race">
    <n-select v-model:value="raceRef" :options="raceOptions" />
  </n-form-item>
</template>
