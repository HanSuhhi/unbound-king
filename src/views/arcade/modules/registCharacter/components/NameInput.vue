<script setup lang='ts'>
import { NFormItem, NInput } from "naive-ui";
import { useI18n } from "vue-i18n";
import { i18nLangModel } from "#/composables/i18n/index";

const { t } = useI18n();
const name = defineModel<string>();
</script>

<template>
  <n-form-item
    :label="t(i18nLangModel.arcade.regist_character.name)" path="name"
  >
    <n-input v-model:value="name" :placeholder="t(i18nLangModel.arcade.regist_character.name_placeholder)" />
  </n-form-item>
</template>
