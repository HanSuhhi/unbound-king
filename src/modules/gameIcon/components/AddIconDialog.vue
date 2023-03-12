<script setup lang="ts">
import CommonFormDialog from "@/components/CommonFormDialog.vue";
import { withFormDetail } from "@/composables/formDetail";
import { transformTypeToForm } from "@/composables/typeToForm";
import { defineUniqueId } from "@/composables/uniqueId";
import type { ComputedRef } from "vue";
import { computed, inject } from "vue";
import { defineTranslatorValidator } from "../../../composables/components/TranslatorValidator";
import { getInvertGlobalEnumNameOrNot } from '../../../enums/global.enum';
import typeString from "../game-icon-type.d.ts?raw";

const key = inject<ComputedRef<string>>("active-key");
const icons = inject<ComputedRef<Record<string, GameIcon>>>("data");

const formConfig = computed(() =>

  withFormDetail<GameIcon>(transformTypeToForm(typeString), {
    id: {
      title: "id",
      disabled: true,
      default: "自动生成，无需操作",
    },
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
      default: key,
      disabled: true,
    },
  }),
);
const confirm = (data: GameIcon) => {
  if (!data.translator.title) data.translator.title = data.translator.name;
  data.id = defineUniqueId("GI");
  data.from = getInvertGlobalEnumNameOrNot(data.from);
  icons!.value[data.id] = data;
};
</script>

<template>
  <common-form-dialog :form-config="formConfig" :confirm="confirm">
    <template #header> Icon 新增 </template>
  </common-form-dialog>
</template>
