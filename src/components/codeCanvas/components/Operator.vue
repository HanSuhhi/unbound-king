<script setup lang='ts'>
import Icon from '@/components/icon/Icon';
import typeButton from '@/components/typeButton/TypeButton.vue';

</script>

<template>
  <type-button color="blue" class="code-canvas-operator">
    <span class="code-canvas-operator_text">复制</span>
    <Icon icon="i-bxs-copy-alt" />
  </type-button>
</template>

<style scoped>
.code-canvas-operator {
  --hover-opacity: 1;

  transform: scale(0.6);
}

.code-canvas-operator_text {
  margin-right: var(--mini);
  font-size: calc(var(--normal) * 1.3);
  transition: all var(--transition-time) ease;
}
</style>