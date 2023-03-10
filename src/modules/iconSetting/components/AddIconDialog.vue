<script setup lang="ts">
import CommonFormDialog from "@/components/CommonFormDialog.vue";
import { withFormDetail } from "@/composables/formDetail";
import { transformTypeToForm } from "@/composables/typeToForm";
import type { ComputedRef, Ref } from "vue";
import { computed, inject } from "vue";
import { defineTranslatorValidator } from "../../../composables/components/TranslatorValidator";
import typeString from "../icon-setting-type.d.ts?raw";

const key = inject<ComputedRef<Translator>>("active-key");
const icons = inject<ComputedRef<Record<string, IconSetting>>>("active-icons");
const changed = inject<Ref<boolean>>("changed")!;

const formConfig = computed(() =>
  withFormDetail<IconSetting>(transformTypeToForm(typeString), {
    translator: {
      title: "key 值",
      rules: [
        {
          validator: defineTranslatorValidator(),
          trigger: "blur",
        },
      ],
    },
    path: {
      title: "路径",
    },
    from: {
      title: "来源",
      default: key?.value.title,
      disabled: true,
    },
  }),
);

const confirm = (data: IconSetting) => {
  data.from = key?.value.name || "";
  if (!data.translator.title) data.translator.title = data.translator.name;
  icons!.value[data.translator.name] = data;
  changed.value = true;
};
</script>

<template>
  <common-form-dialog :form-config="formConfig" :confirm="confirm">
    <template #header> Icon 新增 </template>
  </common-form-dialog>
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
