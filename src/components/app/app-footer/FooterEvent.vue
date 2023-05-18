<script setup lang='ts'>
</script>

<template>
  <section class="footer-event">
    event
  </section>
</template>

<style scoped>
@layer component {
  .footer-event {
    position: absolute;
    bottom: var(--footer-height);
    left: var(--aside-width);

    box-sizing: border-box;
    width: calc(100% - var(--aside-width));
    height: var(--footer-height);

    background-color: var(--bg-color-bright-2);
    border-top: var(--border);
  }}
</style>
