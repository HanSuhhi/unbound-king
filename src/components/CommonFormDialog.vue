<script setup lang="ts">
import autoForm from "@/components/autoForm/autoForm.vue";
import Icon from "@/components/Icon.vue";
import TitleCard from "@/components/titleCard/TitleCard";
import { validateForm } from "@/composables/form/validateForm";
import { FormInstance } from "element-plus";
import { cloneDeep, defer, delay } from "lodash-es";
import { NModal } from "naive-ui";
import type { Ref } from "vue";
import { inject, ref } from "vue";

const props = defineProps<{
  formConfig: AutoformItem[];
  confirm?: Function;
}>();

const modal = inject<Ref<boolean>>("modal")!;

const currentConfig = ref(props.formConfig);
const changed = inject<Ref<boolean>>("changed")!;

const confirm = (data: any, formEl: FormInstance) => {
  validateForm(formEl, () => {
    props.confirm?.(cloneDeep(data));
    changed.value = true;
    modal.value = false;
    delay(() => {
      currentConfig.value = [];
      defer(() => (currentConfig.value = props.formConfig));
    }, Number(import.meta.env.ANIMATION_DURATION));
  });
};
</script>

<template>
  <n-modal v-model:show="modal" :trap-focus="false" class="router-view-dialog">
    <title-card class="form-dialog">
      <template #title>
        <p class="p-reset form-dialog_title">
          <slot name="header" />
        </p>
      </template>
      <template #subtitle>
        <Icon pointer class="form-dialog_close" name="close" @click="modal = false" />
      </template>
      <auto-form :config="currentConfig">
        <template #footer="{ data, form }">
          <section class="form-dialog_confirm">
            <type-button @click.prevent="modal = false">取消</type-button>
            <type-button @click.prevent="confirm(data as GameIcon, form as FormInstance)">确定</type-button>
          </section>
        </template>
      </auto-form>
    </title-card>
  </n-modal>
</template>

<style scoped>
.form-dialog {
  cursor: auto;
}

.form-dialog_close {
  transform: scale(1.5);
}

.form-dialog_close:hover {
  filter: brightness(0.8);
}

.form-dialog_title {
  font-size: var(--font-body);
}

.form-dialog_confirm {
  width: 100%;
  text-align: right;
}

.form-dialog_confirm :deep(button:first-child) {
  margin-right: var(--base-margin);
}
</style>
