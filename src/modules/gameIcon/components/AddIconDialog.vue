<script setup lang="ts">
import CommonFormDialog from "@/components/CommonFormDialog.vue";
import { idFormConfig } from "@/composables/form/formConfigs";
import { withFormDetail } from "@/composables/formDetail";
import { transformTypeToForm } from "@/composables/typeToForm";
import { defineUniqueId } from "@/composables/uniqueId";
import type { ComputedRef } from "vue";
import { computed, inject } from "vue";
import { defineTranslatorValidator } from "../../../composables/form/TranslatorValidator";
import { getInvertGlobalEnumNameOrNot } from '../../../enums/global.enum';
import typeString from "../game-icon-type.d.ts?raw";
import { translatorFormConfig } from '../../../composables/form/formConfigs';

const key = inject<ComputedRef<string>>("active-key");
const icons = inject<ComputedRef<Record<string, GameIcon>>>("data");

const formConfig = computed(() =>

  withFormDetail<GameIcon>(transformTypeToForm(typeString), {
    ...idFormConfig,
    ...translatorFormConfig,
    path: {
      title: "路径",
    },
    from: {
      title: "来源",
      default: key,
      disabled: true,
    },
  }),
);
const confirm = (data: GameIcon) => {
  if (!data.translator.title) data.translator.title = data.translator.name;
  data.id = defineUniqueId("GI");
  data.from = getInvertGlobalEnumNameOrNot(data.from);
  icons!.value[data.id] = data;
};
</script>

<template>
  <common-form-dialog :form-config="formConfig" :confirm="confirm">
    <template #header> Icon 新增 </template>
  </common-form-dialog>
</template>
