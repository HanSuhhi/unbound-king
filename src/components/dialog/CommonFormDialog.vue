<script setup lang="ts">
import type { FormInst } from "naive-ui";
import { cloneDeep, defer, delay } from "lodash";

import type { Ref } from "vue";
import { inject, ref } from "vue";
import CommonDialog from "./CommonDialog.vue";
import { validateForm } from "@/composables/form/validateForm";
import autoForm from "@/components/autoForm/autoForm.vue";
import { getCommonDialog } from "@/composables/components/commonDialog";

const props = defineProps<{
  formConfig: AutoformItem[]
  confirm?: Function
}>();

const { updateModal } = getCommonDialog();

const currentConfig = ref(props.formConfig);
const changed = inject<Ref<boolean>>("changed")!;
const model = ref();
const Form = ref();

function confirm() {
  validateForm(Form.value, () => {
    props.confirm?.(cloneDeep(model.value));
    changed.value = true;
    updateModal(false);
    delay(() => {
      currentConfig.value = [];
      defer(() => (currentConfig.value = props.formConfig));
    }, Number(import.meta.env.STYLE_ANIMATION_DURATION));
  });
}

function getUpdateData(_model: any, _Form: FormInst) {
  model.value = _model;
  Form.value = _Form;
}
</script>

<template>
  <common-dialog>
    <template #title>
      <p class="p-reset form-dialog_title">
        <slot name="header" />
      </p>
    </template>
    <auto-form :config="currentConfig" hot-update @update-data="getUpdateData" />
    <template #footer>
      <section class="form-dialog_confirm">
        <type-button @click.prevent="updateModal(false)">
          取消
        </type-button>
        <type-button @click.prevent="confirm">
          确定
        </type-button>
      </section>
    </template>
  </common-dialog>
</template>

<style scoped>
@layer component {
  .form-dialog_title {
    font-size: var(--font-body);
  }

  .form-dialog_confirm {
    width: 100%;
    text-align: right;
  }

}

.form-dialog_confirm :deep(button:first-child) {
  margin-right: var(--base-margin);
}
</style>
@/composables/components/form/validateForm