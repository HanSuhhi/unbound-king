<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { NFormItem, NSelect } from "naive-ui";
import { i18nLangModel } from "#/composables/i18n/index";
import { useProfessionOptions } from "@/views/arcade/modules/registCharacter/composables/professionOption";
import type { ResponseType_PostRegist } from "@/api/services/character";

const { t } = useI18n();
const professionRef = defineModel<ResponseType_PostRegist["profession"]>();
const { professionOptions } = await useProfessionOptions();
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.profession)" path="profession">
    <n-select v-model:value="professionRef" :options="professionOptions" />
  </n-form-item>
</template>
