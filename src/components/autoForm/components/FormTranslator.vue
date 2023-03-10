<script setup lang="ts">
import { debounce } from "lodash-es";
import { ref, watch } from "vue";

type Props = { modelValue: Translator };
const props = defineProps<Props>();
const emits = defineEmits<{
  (e: "update:modelValue", translator: Translator): void;
}>();

const model = ref<Translator>({
  name: props.modelValue.name,
  title: props.modelValue.title,
});

watch(
  model,
  debounce(() => emits("update:modelValue", model.value)),
  { deep: true },
);
</script>

<template>
  <div class="form-translator">
    <el-input v-model="model['name']" class="form-translator_input" placeholder="唯一的key值..." />
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
