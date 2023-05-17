<script setup lang="ts">
import type { SelectOption } from "naive-ui";
import { NSelect } from "naive-ui";
import type { VNodeChild } from "vue";
import { h } from "vue";
import { transformChaseOptions } from "../composable/chaseOptions";
import Icon from "@/components/Icon.vue";

/** defineModel is an experimental feature, maybe back one day */
// interface Prop { modelValue: string }
// interface Emit { (e: "update:modelValue", chase: string): void}
// const props = defineProps<Prop>();
// const emits = defineEmits<Emit>();
// const model = defineVModel(emits, props.modelValue);

const modelValue = defineModel();

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
  <n-select v-model:value="modelValue" placeholder="请选择抱负" clearable filterable :options="options" :render-label="renderLabel" />
</template>
