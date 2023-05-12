<script setup lang="ts">
const emits = defineEmits<{
  (e: "close"): void
  (e: "copy"): void
}>();

function close() {
  return emits("close");
}
function copy() {
  return emits("copy");
}
</script>

<template>
  <div v-paper-ripple cursor-pointer class="name-tag" @click="copy">
    <slot />
    <div class="name-tag_close">
      <icon name="close" @click.stop="close" />
    </div>
  </div>
</template>

<style scoped>
@layer component {
  .name-tag {
    position: relative;

    display: inline-flex;
    align-items: center;

    margin-right: var(--base-margin);
    margin-bottom: var(--mini);
    padding: var(--mini) var(--small);

    border: var(--border);
    border-radius: var(--border-radius);
  }

  .name-tag_close {
    display: inline-flex;
    align-items: center;

    margin-left: var(--small);
    padding: var(--mini);

    border-radius: 50%;
  }

  .name-tag_close:hover {
    background-color: var(--bg-color-deep-2);
  }
}
</style>
