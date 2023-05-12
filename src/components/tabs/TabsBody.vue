<script setup lang='ts'>
defineProps<{
  notBodyMarginTop?: boolean
}>();
</script>

<template>
  <article class="tabs-body">
    <main class="tabs-body_main" :style="{ 'margin-top': notBodyMarginTop ? '0' : '' }">
      <slot />
    </main>
    <slot name="operator" />
  </article>
</template>

<style scoped>
@layer component {
  .tabs-body {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .tabs-body_main {
    display: inline-flex;
    flex: 1;
    flex-wrap: wrap;
    align-content: flex-start;

    margin-top: var(--base-margin);
  }
}
</style>
