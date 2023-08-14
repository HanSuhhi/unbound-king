<script setup lang='ts'>
import type { FormInst } from "naive-ui";
import { NForm, NFormItem, NInput } from "naive-ui";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import GenderChoosen from "./GenderChoosen.vue";
import type { ResponseType_PostRegist } from "@/api/services/character";
import { i18nLangModel } from "#/composables/i18n/index";

const { t } = useI18n();

const FormRef = ref<FormInst | null>(null);

const formValue = ref<ResponseType_PostRegist>({
  name: "",
  gender: 0,
  profession: "2juchfbwawai",
  personality: "KFy9eYWYnfbX",
  traits: ["cLPWw0lnpQjS"],
  race: "BE1xF4wqYmjF",
  lineage: "eovp79ed7hjd"
});
</script>

<template>
  <n-form
    ref="FormRef"
    label-placement="left"
    :model="formValue"
  >
    <n-form-item
      :label="t(i18nLangModel.arcade.regist_character.name)" path="name"
    >
      <n-input v-model:value="formValue.name" :placeholder="t(i18nLangModel.arcade.regist_character.name_placeholder)" />
    </n-form-item>
    <n-form-item :label="t(i18nLangModel.arcade.regist_character.gender)" path="gender">
      <gender-choosen />
    </n-form-item>
    <n-form-item :label="t(i18nLangModel.arcade.regist_character.profession)" path="profession">
      <h1>gender</h1>
    </n-form-item>
    <n-form-item :label="t(i18nLangModel.arcade.regist_character.personality)" path="personality">
      <h1>gender</h1>
    </n-form-item>
    <n-form-item :label="t(i18nLangModel.arcade.regist_character.traits)" path="traits">
      <h1>gender</h1>
    </n-form-item>
    <n-form-item :label="t(i18nLangModel.arcade.regist_character.race)" path="race">
      <h1>gender</h1>
    </n-form-item>
    <n-form-item :label="t(i18nLangModel.arcade.regist_character.lineage)" path="lineage">
      <h1>gender</h1>
    </n-form-item>
  </n-form>
</template>

<style scoped>
</style>
