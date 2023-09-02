<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { NFormItem, NSelect } from "naive-ui";
import { i18nLangModel } from "#/composables/i18n/index";
import { useProfessionOptions } from "@/views/arcade/modules/registCharacter/composables/professionOption";

const { t } = useI18n();
const professionRef = defineModel<string>();
const [professionOptions] = await useProfessionOptions();
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.profession)" path="profession">
    <n-select v-model:value="professionRef" :options="professionOptions" />
  </n-form-item>
</template>
