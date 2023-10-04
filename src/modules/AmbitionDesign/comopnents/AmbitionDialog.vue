<script setup lang='ts'>
import { computed } from "vue";
import { useConfirm } from "../composables/operator";
import typeString from "../ambition-type.d.ts?raw";
import { fromFormConfig } from "../../../composables/form/formConfigs";
import CommonFormDialog from "@/components/dialog/CommonFormDialog.vue";
import { idFormConfig, translatorFormConfig } from "@/composables/form/formConfigs";
import { withFormDetail } from "@/composables/form/formDetail";
import { transformTypeToForm } from "@/composables/form/typeToForm";

const formConfig = computed(() =>
  withFormDetail<Ambition>(transformTypeToForm(typeString), {
    ...idFormConfig,
    ...translatorFormConfig,
    description: { title: "说明", type: "textarea" },
    chase: {
      title: "追求"
    },
    ...fromFormConfig()
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
</template>
../../../composables/components/form/formConfigs@/composables/components/form/formConfigs@/composables/components/form/formDetail@/composables/components/form/typeToForm