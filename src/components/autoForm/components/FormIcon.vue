<script setup lang="ts">
import type { SelectOption } from "naive-ui";
import { NSelect } from "naive-ui";
import type { VNodeChild } from "vue";
import { h } from "vue";
import { userAutoVModel } from "../composable/formItemDiy";
import Icon from "@/components/Icon.vue";

const props = defineProps<{ modelValue: string }>();
const emits = defineEmits<{
  (e: "update:modelValue", icon: string): void
}>();

const model = userAutoVModel(emits, props.modelValue);

function renderLabel(option: SelectOption & { translator: Translator }): VNodeChild {
  if (option.type === "group") return `${option.label}`;
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
            icon: option as BaseIcon,
            style: {
              "margin-right": "var(--base-margin)"
            }
          }),
          `${option.label} / ${option.translator[0]}`
        ]
      }
    )
  ];
}
</script>

<template>
  <n-select v-model:value="model" placeholder="请选择一个图标" filterable :render-label="renderLabel" />
</template>
