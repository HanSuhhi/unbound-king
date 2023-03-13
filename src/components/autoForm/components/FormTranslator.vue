<script setup lang="ts">
import { autoVModel } from "../composable/formItemDiy";

const props = defineProps<{ modelValue: Translator }>();
const emits = defineEmits<{
  (e: "update:modelValue", translator: Translator): void;
}>();

const model = autoVModel(emits, props.modelValue);
</script>

<template>
  <div class="form-translator">
    <el-input v-model="model['key']" class="form-translator_input" placeholder="唯一的key值..." />
    -<el-input v-model="model['title']" class="form-translator_input" placeholder="显示名，默认为key值" />
  </div>
</template>

<style scoped>
.form-translator {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.form-translator_input {
  width: 45%;
}
</style>
