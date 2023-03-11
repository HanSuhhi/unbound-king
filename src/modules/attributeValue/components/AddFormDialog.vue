<script setup lang="ts">
import CommonFormDialog from "@/components/CommonFormDialog.vue";
import { withFormDetail } from "@/composables/formDetail";
import { transformTypeToForm } from "@/composables/typeToForm";
import type { useCsssDialog } from "csss-ui";
// import { FormInstance } from "element-plus";
import { cloneDeep } from "lodash-es";
import type { Ref } from "vue";
import { computed, inject, watch } from "vue";
import {} from "../../baseIcon/data/baseIcon.data";
import typeString from "../attribute-value-type.d.ts?raw";

const type = inject<Ref<AttributeValue["type"]>>("type");
const attributeValues = inject<Ref<AttributeValue[]>>("data");

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
    key: {
      title: "关键字",
    },
    title: {
      title: "标题",
    },
    description: {
      title: "描述",
    },
    icon: {
      title: "图标",
    },
    type: {
      options: {
        range: [
          {
            name: type,
            title: typeTitle,
          },
        ],
      },
      disabled: true,
      title: "类型",
      default: type || "",
    },
  }),
);

const confirm = (data: AttributeValue) => {
  attributeValues!.value.push(cloneDeep(data));
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
