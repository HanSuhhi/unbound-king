<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import type { SelectOption } from "naive-ui";
import { inject, onMounted, ref, watch } from "vue";
import { isEqual, sample } from "lodash";
import { NFormItem, NSelect } from "naive-ui";
import { RegistCharacterFormValue } from "../regist-character.symbol";
import type { useRegistCharacterForm } from "../composables/regist-character-form";
import { i18nLangModel } from "#/composables/i18n";
import { useProfession } from "@/composables/configs/profession/profession";

const registCharacterForm = inject<ReturnType<typeof useRegistCharacterForm>["registCharacterForm"]>(RegistCharacterFormValue);
const { t } = useI18n();
const professionRef = defineModel<Profession>();
const professionOptions = ref<SelectOption[]>();

const { getProfessionWhenRegistCharacter } = useProfession();

async function getCurrentProfession() {
  if (import.meta.env.SSR) return;
  if (!registCharacterForm) return;
  const { professions } = getProfessionWhenRegistCharacter({
    gender: registCharacterForm.value.gender,
    lineage: registCharacterForm.value.lineage
  });
  if (isEqual(professions, professionOptions.value?.map(professionOption => professionOption.value))) return;
  professionOptions.value = professions.map(profession => ({
    label: t(i18nLangModel.enum.profession[profession]),
    value: profession
  }));
  registCharacterForm.value.profession = sample(professions)!;
}

watch(() => registCharacterForm?.value.gender, getCurrentProfession);
watch(() => registCharacterForm?.value.lineage, getCurrentProfession);

onMounted(getCurrentProfession);
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.profession)" path="profession">
    <n-select v-model:value="professionRef" :options="professionOptions" />
  </n-form-item>
</template>
