<script setup lang='ts'>
import { NColorPicker } from "naive-ui";
import { userAutoVModel } from "../composable/formItemDiy";

const props = defineProps<{ modelValue: Color }>();
const emits = defineEmits<{
  (e: "update:modelValue", color: Color): void
}>();

const model = userAutoVModel(emits, props.modelValue);
</script>

<template>
  <div class="form-color">
    <n-color-picker v-model:value="model![0]" />
    <n-color-picker v-model:value="model![1]" />
  </div>
</template>

<style scoped>
.form-color {
  display: flex;
  width: 100%;
}
</style>
