<script setup lang="ts">
import { defineCommonDialog } from "@/composables/components/commonDialog";
import { idFormConfig, translatorFormConfig, iconFormConfig } from "@/composables/form/formConfigs";
import { withFormDetail } from "@/composables/form/formDetail";
import { transformTypeToForm } from "@/composables/form/typeToForm";
import { computed } from "vue";
import typeString from "../ambition-type.d.ts?raw";
import CommonFormDialog from "@/components/CommonFormDialog.vue";
import { useConfirm } from "../composables/operator";

const { modalShow } = defineCommonDialog();
const formConfig = computed(() =>
  withFormDetail<Ambition>(transformTypeToForm(typeString), {
    ...idFormConfig,
    ...translatorFormConfig,
    description: { title: "说明", type: "textarea" },
    chase: {
      title: "追求",
    },
  }),
);
const [confirm] = useConfirm();
</script>
pip3 install torch torchvision torchaudio --index-url https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/win-64/
<template>
  <common-form-dialog :form-config="formConfig" :confirm="confirm">
    <template #header>抱负</template>
  </common-form-dialog>
  <footer class="operator">
    <type-button @click="modalShow = true">新增</type-button>
  </footer>
</template>

<style scoped>
.operator {
  margin-bottom: var(--base-margin);
  padding: var(--base-margin);
  background-color: var(--bg-color-bright-2);
  border: var(--border);
  border-radius: var(--border-radius);
}
</style>
