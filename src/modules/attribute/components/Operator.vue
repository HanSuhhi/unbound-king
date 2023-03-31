<script setup lang="ts">
import CommonFormDialog from "@/components/CommonFormDialog.vue";
import typeButton from "@/components/typeButton/TypeButton.vue";
import { defineCommonDialog } from "@/composables/components/commonDialog";
import { iconFormConfig, idFormConfig, translatorFormConfig } from "@/composables/form/formConfigs";
import { withFormDetail } from "@/composables/formDetail";
import { transformTypeToForm } from "@/composables/typeToForm";
import type { Ref } from "vue";
import { computed, inject } from "vue";
import typeString from "../attribute-type.d.ts?raw";

const attributes = inject<Ref<IdValue<Attribute>>>("data");

const formConfig = computed(() =>
  withFormDetail<Attribute>(transformTypeToForm(typeString), {
    ...idFormConfig,
    ...translatorFormConfig,
    ...iconFormConfig,
    description: { title: "说明", type: "textarea" },
    explanation: { title: "阐述", type: "textarea" },
    buffs: {
      hide: true,
    },
  }),
);
const { openDialog } = defineCommonDialog("attribute");

const confirm = (data: Attribute) => {
  attributes!.value[data.translator.key] = data;
};
</script>

<template>
  <common-form-dialog :form-config="formConfig" :confirm="confirm">
    <template #header>属性</template>
  </common-form-dialog>
  <div class="operator">
    <type-button @click="openDialog">新增</type-button>
  </div>
</template>

<style scoped>
.operator {
  padding: var(--base-margin);
  background-color: var(--bg-color-bright-2);
  border: var(--border);
  border-radius: var(--border-radius);
}
</style>
