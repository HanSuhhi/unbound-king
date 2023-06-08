<script setup lang="ts">
import { computed } from "vue";
import typeString from "../attribute-type.d.ts?raw";
import { useConfirm } from "../composables/operator";
import CommonFormDialog from "@/components/dialog/CommonFormDialog.vue";
import typeButton from "@/components/typeButton/TypeButton.vue";
import { defineCommonDialog } from "@/composables/components/commonDialog";
import { iconFormConfig, idFormConfig, translatorFormConfig } from "@/composables/form/formConfigs";
import { withFormDetail } from "@/composables/form/formDetail";
import { transformTypeToForm } from "@/composables/form/typeToForm";

const formConfig = computed(() =>
  withFormDetail<Attribute>(transformTypeToForm(typeString), {
    ...idFormConfig,
    ...translatorFormConfig,
    ...iconFormConfig,
    description: { title: "说明", type: "textarea" },
    explanation: { title: "阐述", type: "textarea" }
  })
);
const { update } = defineCommonDialog();
const [confirm] = useConfirm();
</script>

<template>
  <common-form-dialog :form-config="formConfig" :confirm="confirm">
    <template #header>
      属性
    </template>
  </common-form-dialog>
  <div class="operator">
    <type-button @click="update(true)">
      新增
    </type-button>
  </div>
</template>

<style scoped>
@layer component {
  .operator {
    padding: var(--base-margin);
    background-color: var(--bg-color-bright-2);
    border: var(--border);
    border-radius: var(--border-radius);
  }
}
</style>
