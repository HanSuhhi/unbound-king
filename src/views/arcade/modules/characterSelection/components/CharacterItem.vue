<script setup lang='ts'>
const { name } = defineProps<{ name: string }>();
</script>

<template>
  <div cursor-pointer class="character-item">
    {{ name }}
  </div>
</template>

<style scoped>
@layer component {
  .character-item {
    width: calc(3 * var(--large));
    height: var(--large);
    padding: var(--large) var(--base-margin);

    background: rgb(255 255 255 / 40%);

    /* filter: blur(2px); */
    border-radius: var(--border-radius);
  }

  .character-list_choosed {
    background-color: var(--red-bright-2);
  }
}
</style>
