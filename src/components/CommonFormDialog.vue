<script setup lang="ts">
import { FormInst, NModal } from "naive-ui";
import { cloneDeep, defer, delay } from "lodash-es";

import type { Ref } from "vue";
import { inject, ref } from "vue";
import { validateForm } from "@/composables/form/validateForm";
import TitleCard from "@/components/titleCard/TitleCard";
import Icon from "@/components/Icon.vue";
import autoForm from "@/components/autoForm/autoForm.vue";

const props = defineProps<{
  formConfig: AutoformItem[]
  confirm?: Function
}>();

const modal = inject<Ref<boolean>>("modal")!;

const currentConfig = ref(props.formConfig);
const changed = inject<Ref<boolean>>("changed")!;

function confirm(data: any, formEl: FormInst) {
  validateForm(formEl, () => {
    props.confirm?.(cloneDeep(data));
    changed.value = true;
    modal.value = false;
    delay(() => {
      currentConfig.value = [];
      defer(() => (currentConfig.value = props.formConfig));
    }, Number(import.meta.env.STYLE_ANIMATION_DURATION));
  });
}
</script>

<template>
  <n-modal v-model:show="modal" :mask-closable="false" :trap-focus="false" class="router-view-dialog">
    <title-card class="form-dialog">
      <template #title>
        <p class="p-reset form-dialog_title">
          <slot name="header" />
        </p>
      </template>
      <template #subtitle>
        <icon cursor-pointer class="form-dialog_close" name="close" @click="modal = false" />
      </template>
      <auto-form :config="currentConfig">
        <template #footer="{ data, form }">
          <section class="form-dialog_confirm">
            <type-button @click.prevent="modal = false">
              取消
            </type-button>
            <type-button @click.prevent="confirm(data as GameIcon, form as unknown as FormInst)">
              确定
            </type-button>
          </section>
        </template>
      </auto-form>
    </title-card>
  </n-modal>
</template>

<style scoped>
@layer component {
  .router-view-dialog {
    border-radius: var(--border-radius);
  }

  .form-dialog_close {
    font-size: var(--font-title-main);
    transition: all var(--transition-prop);
  }

  .form-dialog_close:hover {
    transform: rotate(180deg);
    color: var(--white);
  }

  .form-dialog_close:active {
    transform: rotate(360deg);
  }

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
