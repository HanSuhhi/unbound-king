<script setup lang="ts">
import type { SelectOption } from "naive-ui";
import { NSelect } from "naive-ui";
import type { VNodeChild } from "vue";
import { h } from "vue";
import { autoVModel } from "../composable/formItemDiy";
import { transformChaseOptions } from "../composable/chaseOptions";
import Icon from "@/components/Icon.vue";

const props = defineProps<{ modelValue: string }>();
const emits = defineEmits<{
  (e: "update:modelValue", chase: string): void
}>();

const model = autoVModel(emits, props.modelValue);

const options = transformChaseOptions();

function renderLabel(option: SelectOption & { icon: string }): VNodeChild {
  return [
    h(
      "p",
      {
        style: {
          "display": "flex",
          "align-items": "center"
        }
      },
      {
        default: () => [
          h(Icon, {
            path: option.icon,
            style: {
              "margin-right": "var(--base-margin)"
            }
          }),
          `${option.label} / ${option.value}`
        ]
      }
    )
  ];
}
</script>

<template>
  <n-select v-model:value="model" placeholder="请选择抱负" clearable filterable :options="options" :render-label="renderLabel" />
</template>
