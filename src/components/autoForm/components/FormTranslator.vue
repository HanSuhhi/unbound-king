<script setup lang="ts">
import { NInput } from "naive-ui";
import { userAutoVModel } from "../composable/formItemDiy";

const props = defineProps<{ modelValue: Translator }>();
const emits = defineEmits<{
  (e: "update:modelValue", translator: Translator): void
}>();

const model = userAutoVModel(emits, props.modelValue);

const placeholder: [string, string] = ["请输入唯一 key", "显示名称，默认为 key"];
</script>

<template>
  <div class="form-translator">
    <n-input v-model:value="model" pair separator="-" clearable :placeholder="placeholder" />
  </div>
</template>

<style scoped>
.form-translator {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
