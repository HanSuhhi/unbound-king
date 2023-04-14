<script setup lang="ts">
import type { SelectOption } from "naive-ui";
import { NSelect } from "naive-ui";
import type { VNodeChild } from "vue";
import { h } from "vue";
import { transformIconToElLabelOptions } from "../composable/elLabelOptions";
import { autoVModel } from "../composable/formItemDiy";
import { DATA } from "@/composables/data";
import Icon from "@/components/Icon.vue";

const props = defineProps<{ modelValue: string }>();
const emits = defineEmits<{
  (e: "update:modelValue", icon: string): void
}>();

const model = autoVModel(emits, props.modelValue);

const options = transformIconToElLabelOptions(DATA.DATA_GameIcons);

function renderLabel(option: SelectOption): VNodeChild {
  if (option.type === "group") return `${option.label}(Cool!)`;
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          h(Icon, {
            icon: option,
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
  <n-select v-model:value="model" placeholder="请选择一个图标" filterable :options="options" :render-label="renderLabel" />
</template>
