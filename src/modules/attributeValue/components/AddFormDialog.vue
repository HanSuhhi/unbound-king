<script setup lang="ts">
import type { Ref } from "vue";
import { computed, inject } from "vue";
import { iconFormConfig, translatorFormConfig } from "../../../composables/form/formConfigs";
import typeString from "../attribute-value-type.d.ts?raw";
import { withFormDetail } from "@/composables/form/formDetail";
import { transformTypeToForm } from "@/composables/form/typeToForm";
import CommonFormDialog from "@/components/dialog/CommonFormDialog.vue";

const type = inject<Ref<AttributeValue["type"]>>("type");
const attributeValues = inject<Ref<Array<AttributeValue>>>("data");

const typeTitle = computed(() => {
  switch (type!.value) {
    case "base":
      return "基础属性值";
    case "special":
      return "特殊属性值";
    case "advanced":
    default:
      return "进阶属性值";
  }
});

const formConfig = computed(() =>
  withFormDetail<AttributeValue>(transformTypeToForm(typeString), {
    ...translatorFormConfig,
    ...iconFormConfig,
    description: {
      title: "描述"
    },
    type: {
      options: {
        range: [
          [type, typeTitle]
          // {
          //   key: type,
          //   title: typeTitle,
          // },
        ]
      },
      disabled: true,
      title: "类型",
      defaultValue: type || ""
    }
  })
);

function confirm(data: AttributeValue) {
  attributeValues!.value.push(data);
}
</script>

<template>
  <common-form-dialog :form-config="formConfig" :confirm="confirm">
    <template #header>
      {{ typeTitle }}
    </template>
  </common-form-dialog>
</template>
