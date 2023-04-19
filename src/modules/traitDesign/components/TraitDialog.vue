<script setup lang='ts'>
import { computed } from "vue";
import typeString from "../trait-type.d.ts?raw";
import { fromFormConfig } from "../../../composables/form/formConfigs";
import { useConfirm } from "../composables/confirm";
import CommonFormDialog from "@/components/CommonFormDialog.vue";
import { colorFormConfig, iconFormConfig, idFormConfig, translatorFormConfig } from "@/composables/form/formConfigs";
import { withFormDetail } from "@/composables/form/formDetail";
import { transformTypeToForm } from "@/composables/form/typeToForm";

const formConfig = computed(() =>
  withFormDetail<Trait>(transformTypeToForm(typeString), {
    ...idFormConfig,
    ...translatorFormConfig,
    ...colorFormConfig,
    ...iconFormConfig,
    ...fromFormConfig()
  })
);
</script>

<template>
  <common-form-dialog :form-config="formConfig" :confirm="useConfirm()">
    <template #header>
      特征 新增
    </template>
  </common-form-dialog>
</template>
