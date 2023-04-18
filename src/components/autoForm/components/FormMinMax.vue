<script setup lang='ts'>
import { NInputNumber } from "naive-ui";
import { autoVModel } from "../composable/formItemDiy";

interface Prop {
  modelValue: MinMax
  limit?: AutoformItem["limit"]
}

const props = defineProps<Prop>();
const emits = defineEmits<{
  (e: "update:modelValue", minMax: MinMax): void
}>();

const model = autoVModel(emits, props.modelValue);
</script>

<template>
  <div class="min-max">
    <n-input-number
      v-model:value="model![0]"
      placeholder="最小值"
      :min="limit?.min"
      :max="limit?.max"
    />
    <n-input-number
      v-model:value="model![1]"
      placeholder="最大值"
      :min="limit?.min"
      :max="limit?.max"
    />
  </div>
</template>

<style scoped>
.min-max {
  display: flex;

  > div {
    margin: 0 var(--base-margin);
  }
}
</style>
