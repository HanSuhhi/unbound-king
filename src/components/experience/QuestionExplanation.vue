<script setup lang='ts'>
import Explanation from "./Explanation.vue";

defineProps<{ iconClass?: string }>();
</script>

<template>
  <explanation>
    <template #trigger>
      <icon class="question-explanation_question" :class="iconClass" name="question" />
    </template>
    <slot />
  </explanation>
</template>

<style scoped>
.question-explanation_question {
  color: var(--gray-bright-1);
  cursor: pointer;
}
</style>
