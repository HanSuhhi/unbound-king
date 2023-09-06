<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { NFormItem, NSelect } from "naive-ui";
import { useGenderOptions } from "../composables/genderOption";
import { i18nLangModel } from "#/composables/i18n";
import type { ResponseType_PostRegist } from "@/api/services/character";

const { t } = useI18n();
const genderRef = defineModel<ResponseType_PostRegist["gender"]>();

const { genderOptions } = await useGenderOptions();
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.gender)" path="gender">
    <n-select v-model:value="genderRef" :options="genderOptions" />
  </n-form-item>
</template>
