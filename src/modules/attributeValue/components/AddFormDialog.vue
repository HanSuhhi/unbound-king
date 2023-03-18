<script setup lang="ts">
import CommonFormDialog from "@/components/CommonFormDialog.vue";
import { withFormDetail } from "@/composables/formDetail";
import { transformTypeToForm } from "@/composables/typeToForm";
import { defineUniqueId } from "@/composables/uniqueId";
import type { Ref } from "vue";
import { computed, inject } from "vue";
import { idFormConfig, translatorFormConfig } from "../../../composables/form/formConfigs";
import typeString from "../attribute-value-type.d.ts?raw";

const type = inject<Ref<AttributeValue["type"]>>("type");
const attributeValues = inject<Ref<IdValue<AttributeValue>>>("data");

const typeTitle = computed(() => {
  switch (type!.value) {
    case "base":
      return "基础属性值";
    case "special":
      return "特殊属性值";
    default:
    case "advanced":
      return "进阶属性值";
  }
});

const formConfig = computed(() =>
  withFormDetail<AttributeValue>(transformTypeToForm(typeString), {
    ...idFormConfig,
    ...translatorFormConfig,
    description: {
      title: "描述",
    },
    icon: {
      title: "图标",
    },
    dataType: {
      title: "数据类型",
    },
    type: {
      options: {
        range: [
          {
            key: type,
            title: typeTitle,
          },
        ],
      },
      disabled: true,
      title: "类型",
      defaultValue: type || "",
    },
  }),
);

const confirm = (data: AttributeValue) => {
  data.id = defineUniqueId("atv");
  attributeValues!.value[data.id] = data;
};
</script>

<template>
  <common-form-dialog :form-config="formConfig" :confirm="confirm">
    <template #header>{{ typeTitle }}</template>
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
