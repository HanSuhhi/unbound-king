<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import type { SelectOption } from "naive-ui";
import type { Ref } from "vue";
import { inject, ref, watch } from "vue";
import { useRequest } from "alova";
import { isEqual, sample } from "lodash";
import { RegistCharacterFormValue } from "../regist-character.symbol";
import type { ResponseType_PostRegist } from "@/api/services/character";
import { getRegistCharacterProfessions } from "@/api/services/professions";
import { i18nLangModel } from "#/composables/i18n";

const registCharacterForm = inject<Ref<ResponseType_PostRegist>>(RegistCharacterFormValue)!;
const { t } = useI18n();
const professionRef = defineModel<ResponseType_PostRegist["profession"]>();
const professionOptions = ref<SelectOption[]>();

const { send } = useRequest(() => getRegistCharacterProfessions({
  gender: registCharacterForm.value.gender,
  lineage: registCharacterForm.value.lineage
}), { immediate: false });

async function getCurrentProfession() {
  if (import.meta.env.SSR) return;
  const { data: { professions } } = await send();
  if (isEqual(professions, professionOptions.value?.map(professionOption => professionOption.value))) return;
  professionOptions.value = professions.map(profession => ({
    label: t(i18nLangModel.enum.profession[profession]),
    value: profession
  }));
  registCharacterForm.value.profession = sample(professions)!;
}

watch(() => registCharacterForm?.value.gender, getCurrentProfession, { immediate: true });
watch(() => registCharacterForm?.value.lineage, getCurrentProfession);
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.profession)" path="profession">
    <n-select v-model:value="professionRef" :options="professionOptions" />
  </n-form-item>
</template>
