<script setup lang="ts">
import autoForm from "@/components/autoForm/autoForm.vue";
import TitleCard from "@/components/titleCard/TitleCard";
import { validateForm } from "@/composables/validateForm";
import type { useCsssDialog } from "csss-ui";
import { CDialog } from "csss-ui";
import { FormInstance } from "element-plus";
import { inject, ref } from "vue";
import { cloneDeep, defer } from "lodash-es";
import Icon from "@/components/Icon.vue";

const props = defineProps<{
  formConfig: AutoformItem[];
  confirm?: Function;
}>();

const state = inject<ReturnType<typeof useCsssDialog>["state"]>("dialog");
const Dialog = inject("Dialog");

const currentConfig = ref(props.formConfig);

const confirm = (data: GameIcon, formEl: FormInstance) => {
  validateForm(formEl, () => {
    props.confirm?.(cloneDeep(data));
    state!.value.show = false;
    currentConfig.value = [];
    defer(() => (currentConfig.value = props.formConfig));
  });
};
</script>

<template>
  <c-dialog ref="Dialog">
    <title-card class="form-dialog">
      <template #title>
        <p class="p-reset form-dialog_title">
          <slot name="header" />
        </p>
      </template>
      <template #subtitle>
        <Icon name="close" @click="state!.show = false" />
      </template>
      <auto-form :config="currentConfig">
        <template #footer="{ data, form }">
          <section class="form-dialog_confirm">
            <type-button @click.prevent="state!.show = false">取消</type-button>
            <type-button @click.prevent="confirm(data as GameIcon, form as FormInstance)">确定</type-button>
          </section>
        </template>
      </auto-form>
    </title-card>
  </c-dialog>
</template>

<style scoped>
.form-dialog {
  cursor: auto;
}

.i-mdi-close-thick {
  cursor: pointer;
}

.i-mdi-close-thick:hover {
  color: var(--main-color);
}

.form-dialog_title {
  font-size: var(--font-body);
}

.form-dialog_confirm {
  width: 100%;
  text-align: right;
}
</style>
