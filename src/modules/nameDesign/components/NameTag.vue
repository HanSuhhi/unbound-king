<script setup lang="ts">
import { NTag } from "naive-ui";

const emits = defineEmits<{
  (e: "close"): void;
  (e: "copy"): void;
}>();

const close = () => emits("close");
const copy = () => emits("copy");
</script>

<template>
  <n-tag class="name-tag" closable :size="'large'" @close.stop="close" @click="copy">
    <slot />
  </n-tag>
</template>

<style scoped>
.name-tag {
  margin-right: var(--base-margin);
  margin-bottom: var(--mini);
  cursor: pointer;
}
</style>
