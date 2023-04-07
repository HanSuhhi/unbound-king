<script setup lang="ts">
import CommonFormDialog from "@/components/CommonFormDialog.vue";
import { idFormConfig } from "@/composables/form/formConfigs";
import { withFormDetail } from "@/composables/form/formDetail";
import { transformTypeToForm } from "@/composables/form/typeToForm";
import { defineUniqueId } from "@/composables/ci/uniqueId";
import type { ComputedRef } from "vue";
import { computed, inject } from "vue";
import { translatorFormConfig, descriptionFormConfig, iconFormConfig } from "../../../composables/form/formConfigs";
import { getInvertGlobalEnumNameOrNot } from "../../../enums/global.enum";
import typeString from "../personality-type.d.ts?raw";

const item = inject<ComputedRef<TabListItem>>("active-item");
const moduleData = inject<ComputedRef<Record<string, Personality>>>("data");

const formConfig = computed(() =>
  withFormDetail<Personality>(transformTypeToForm(typeString), {
    ...idFormConfig,
    ...translatorFormConfig,
    ...descriptionFormConfig,
    ...iconFormConfig,
    from: {
      title: "来源",
      defaultValue: item?.value.name,
      disabled: true,
    },
  }),
);
const confirm = (data: Personality) => {
  if (!data.translator[1]) data.translator[1] = data.translator[0];
  data.id = defineUniqueId("P");
  data.from = getInvertGlobalEnumNameOrNot(data.from);
  moduleData!.value[data.id] = data;
};
</script>

<template>
  <common-form-dialog :form-config="formConfig" :confirm="confirm">
    <template #header> 个性 新增 </template>
  </common-form-dialog>
</template>
