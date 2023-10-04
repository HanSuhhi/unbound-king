<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { NFormItem, NSelect } from "naive-ui";
import { computed } from "vue";
import { useRegistCharacterLineageOptions } from "../composables/lineage-option";
import { i18nLangModel } from "#/composables/i18n/index";
import { useLineageService } from "@/composables/configs/lineage/lineage";

const { race } = defineProps<{ race: Race }>();
const { t, locale } = useI18n();
const lineageRef = defineModel<Lineages>();
const { lineageOptions } = await useRegistCharacterLineageOptions(locale, t);
const { getRaceFromLineage } = useLineageService();

const showingLineageOptions = computed(() => {
  return lineageOptions.value.filter(({ value }) => {
    return getRaceFromLineage(value as Lineages) === race;
  });
});
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.lineage)" path="lineage">
    <n-select v-model:value="lineageRef" :options="showingLineageOptions" />
  </n-form-item>
</template>
../composables/lineage-option
