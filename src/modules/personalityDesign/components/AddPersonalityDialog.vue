<script setup lang="ts">
import type { ComputedRef } from "vue";
import { computed, inject } from "vue";
import { descriptionFormConfig, fromFormConfig, iconFormConfig, translatorFormConfig } from "../../../composables/form/formConfigs";
import typeString from "../personality-type.d.ts?raw";
import CommonFormDialog from "@/components/CommonFormDialog.vue";
import { idFormConfig } from "@/composables/form/formConfigs";
import { withFormDetail } from "@/composables/form/formDetail";
import { transformTypeToForm } from "@/composables/form/typeToForm";
import { defineUniqueId } from "@/composables/ci/uniqueId";

const moduleData = inject<ComputedRef<Array<Personality>>>("data");

const formConfig = computed(() =>
  withFormDetail<Personality>(transformTypeToForm(typeString), {
    ...idFormConfig,
    ...translatorFormConfig,
    ...descriptionFormConfig,
    ...iconFormConfig,
    ...fromFormConfig()
  })
);
function confirm(data: Personality) {
  if (!data.translator[1]) data.translator[1] = data.translator[0];
  data.id = defineUniqueId("P");
  moduleData!.value.push(data);
}
</script>

<template>
  <common-form-dialog :form-config="formConfig" :confirm="confirm">
    <template #header>
      个性 新增
    </template>
  </common-form-dialog>
</template>
