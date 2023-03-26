<script setup lang="ts">
const emits = defineEmits<{
  (e: "close"): void;
  (e: "copy"): void;
}>();

const close = () => emits("close");
const copy = () => emits("copy");
</script>

<template>
  <el-tag class="name-tag" closable :size="'large'" @close.stop="close" @click="copy">
    <slot />
  </el-tag>
</template>

<style scoped>
.name-tag {
  margin-right: var(--base-margin);
  margin-bottom: var(--mini);
  cursor: pointer;
}
</style>
