<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { NFormItem, NSelect } from "naive-ui";
import { useRegistCharacterGenderOptions } from "../composables/gender-option";
import { i18nLangModel } from "#/composables/i18n";

const { t, locale } = useI18n();
const genderRef = defineModel<Gender>();

const { genderOptions } = await useRegistCharacterGenderOptions(locale, t);
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.gender)" path="gender">
    <n-select v-model:value="genderRef" :options="genderOptions" />
  </n-form-item>
</template>
../composables/gender-option
