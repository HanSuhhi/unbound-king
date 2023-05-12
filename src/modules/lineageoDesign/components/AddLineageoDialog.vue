<script setup lang='ts'>
import { computed } from "vue";
import typeString from "../lineageo-type.d.ts?raw";
import { useConfirm } from "../composables/confirm";
import { colorFormConfig, descriptionFormConfig, fromFormConfig } from "../../../composables/form/formConfigs";
import { destinyFormConfig, iconFormConfig, idFormConfig, translatorFormConfig } from "@/composables/form/formConfigs";
import { withFormDetail } from "@/composables/form/formDetail";
import { transformTypeToForm } from "@/composables/form/typeToForm";
import CommonFormDialog from "@/components/CommonFormDialog.vue";

const formConfig = computed(() =>
  withFormDetail<Lineageo>(transformTypeToForm(typeString), {
    ...idFormConfig,
    ...translatorFormConfig,
    ...destinyFormConfig,
    ...descriptionFormConfig,
    ...fromFormConfig(),
    origin: {
      title: "起源",
      type: "textarea"
    },
    ...colorFormConfig,
    ...iconFormConfig,
    provideHeight: {
      title: "个体高度范围",
      type: "minmax",
      defaultValue: [100, 200],
      limit: { min: 0, max: 1000 }
    },
    provideWeight: {
      title: "个体重量范围",
      type: "minmax",
      defaultValue: [20, 100],
      limit: { min: 0, max: 1000 }
    }
  })
);
const [confirm] = useConfirm();
</script>

<template>
  <common-form-dialog :form-config="formConfig" :confirm="confirm">
    <template #header>
      新增
    </template>
  </common-form-dialog>
</template>
