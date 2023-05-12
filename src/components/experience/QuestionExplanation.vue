<script setup lang='ts'>
import Explanation from "./Explanation.vue";

defineProps<{ iconClass?: string }>();
</script>

<template>
  <explanation>
    <template #trigger>
      <icon
        cursor-help
        class="question-explanation_question"
        :class="iconClass"
        name="question"
      />
    </template>
    <slot />
  </explanation>
</template>

<style scoped>
.question-explanation_question {
  color: var(--gray-bright-1);
  transition: all var(--transition-prop);
}

.question-explanation_question:hover {
  transform: rotate(360deg);
  color: var(--white);
}
</style>
