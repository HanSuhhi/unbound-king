<script setup lang="ts">
import { computed } from "vue";
import typeString from "../ambition-type.d.ts?raw";
import { useConfirm } from "../composables/operator";
import { defineCommonDialog } from "@/composables/components/commonDialog";
import { idFormConfig, translatorFormConfig } from "@/composables/form/formConfigs";
import { withFormDetail } from "@/composables/form/formDetail";
import { transformTypeToForm } from "@/composables/form/typeToForm";
import CommonFormDialog from "@/components/CommonFormDialog.vue";
import SearchInput from "@/components/SearchInput.vue";
import AddButton from "@/components/performance/AddButton.vue";

defineCommonDialog();

const formConfig = computed(() =>
  withFormDetail<Ambition>(transformTypeToForm(typeString), {
    ...idFormConfig,
    ...translatorFormConfig,
    description: { title: "说明", type: "textarea" },
    chase: {
      title: "追求"
    }
  })
);
const [confirm] = useConfirm();
</script>

<template>
  <common-form-dialog :form-config="formConfig" :confirm="confirm">
    <template #header>
      抱负
    </template>
  </common-form-dialog>
  <footer class="operator">
    <search-input :watch-event="() => {}" />
    <add-button />
  </footer>
</template>

<style scoped>
.operator {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--base-margin);
  padding: var(--base-margin);
  background-color: var(--bg-color-bright-2);
  border: var(--border);
  border-radius: var(--border-radius);
}
</style>
