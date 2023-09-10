<script setup lang='ts'>
import { NFormItem } from "naive-ui";
import { useI18n } from "vue-i18n";
import { i18nLangModel } from "../../../../../../composables/i18n/index";
import { useRegistCharacterForms } from "../composables/form-events";
import type { ResponseType_PostRegist } from "@/api/services/character";
import TypeButton from "@/components/typeButton/TypeButton.vue";

const { t } = useI18n();
const formRef = defineModel<ResponseType_PostRegist>();
const { randomCharacter } = useRegistCharacterForms(formRef);
</script>

<template>
  <n-form-item>
    <type-button attr-type="button" @click="randomCharacter">
      {{ t(i18nLangModel.arcade.regist_character.sample_form) }}
    </type-button>
  </n-form-item>
</template>
