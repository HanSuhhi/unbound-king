import { userAutoVModel } from '../autoForm/composable/formItemDiy';
<script setup lang='ts'>
import { watch } from "vue";
import { debounce } from "lodash-es";
import { userAutoVModel } from "../autoForm/composable/formItemDiy";

const props = defineProps<{ modelValue: string; minlength?: number }>();
const emits = defineEmits<{
  (e: "update:modelValue", input: string): void
}>();

const model = userAutoVModel(emits, props.modelValue);

if (props.minlength) {
  watch(model, debounce((input, oldInput) => {
    if (input!.length < props.minlength!) model.value = oldInput;
  }, 1000));
}
</script>

<template>
  <input v-model="model" cursor-text class="input-reset">
</template>
