<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { NFormItem, NSelect } from "naive-ui";
import { usePersonalityOptions } from "../composables/personalityOption";
import { i18nLangModel } from "#/composables/i18n/index";
import type { ResponseType_PostRegist } from "@/api/services/character";

const { t } = useI18n();
const personalityRef = defineModel<ResponseType_PostRegist["personality"]>();
const [personalityOptions] = await usePersonalityOptions();
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.personality)" path="personality">
    <n-select v-model:value="personalityRef" :options="personalityOptions" />
  </n-form-item>
</template>
