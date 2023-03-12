<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import typeButton from "@/components/typeButton/TypeButton.vue";
</script>

<template>
  <type-button color="blue" class="code-canvas-operator">
    <Icon class="code-canvas-operator_icon" name="copy" />
    <span class="code-canvas-operator_text">复制</span>
  </type-button>
</template>

<style scoped>
.code-canvas-operator_icon {
  margin-right: var(--small);
  font-size: var(--normal);
}

.code-canvas-operator {
  --hover-opacity: 1;

  transform: scale(0.8);
}

.code-canvas-operator_text {
  margin-right: var(--mini);
  font-size: var(--font-title-main);
  transition: all var(--transition-time) ease;
}
</style>
