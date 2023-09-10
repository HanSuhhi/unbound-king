<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { NFormItem, NSelect } from "naive-ui";
import { computed } from "vue";
import { useLineageOptions } from "../composables/lineageOption";
import type { ResourseTag } from "#/server/modules/editions/enums/resourse-tag.enum";
import { i18nLangModel } from "#/composables/i18n/index";
import type { ResponseType_PostRegist } from "@/api/services/character";

const { race } = defineProps<{ race: ResponseType_PostRegist["race"] }>();
const { t, locale } = useI18n();
const lineageRef = defineModel<ResponseType_PostRegist["lineage"]>();
const { lineageOptions } = await useLineageOptions(locale, t);

const showingLineageOptions = computed(() => {
  return lineageOptions.value.filter(({ tags }: any) => {
    return tags.includes(race as ResourseTag);
  });
});
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.lineage)" path="lineage">
    <n-select v-model:value="lineageRef" :options="showingLineageOptions" />
  </n-form-item>
</template>
