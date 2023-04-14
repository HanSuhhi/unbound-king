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
  <p class="name-tag p-reset" @click="copy">
    <slot />
  <div class="name-tag_close">
    <icon name="close" @click.stop="close" />
  </div>
  </p>
</template>

<style scoped>
.name-tag {
  display: inline-flex;
  align-items: center;
  margin-right: var(--base-margin);
  margin-bottom: var(--mini);
  padding: var(--mini) var(--small);
  border: var(--border);
  border-radius: var(--border-radius);
  cursor: pointer;
}

.name-tag_close {
  display: inline-flex;
  align-items: center;
  margin-left: var(--small);
  padding: var(--mini);
  border-radius: 50%;

  &:hover {
    background-color: var(--bg-color-deep-2);
  }
}
</style>
