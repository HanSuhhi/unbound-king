<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { NFormItem, NSelect } from "naive-ui";
import { useTraitOptions } from "../composables/traitOption";
import { i18nLangModel } from "#/composables/i18n/index";
import type { ResponseType_PostRegist } from "@/api/services/character";

const { t } = useI18n();
const traitRef = defineModel<ResponseType_PostRegist["traits"]>();
const { traitOptions } = await useTraitOptions();
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.traits)" path="traits">
    <n-select v-model:value="traitRef" multiple :options="traitOptions" />
  </n-form-item>
</template>
