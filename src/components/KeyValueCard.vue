<script setup lang="ts">
defineProps<{ title: string; value: string }>();
</script>

<template>
  <article class="key-value-card">
    <section class="key-value-card_key">
      {{ title }}
    </section>
    <section class="key-value-card_value">
      {{ value }}
    </section>
  </article>
</template>

<style scoped>
@layer component {
  .key-value-card {
    display: inline-flex;

    width: fit-content;

    filter: brightness(0.9);
    border: var(--border);
    border-radius: var(--border-radius);
  }

  .key-value-card_key {
    padding: var(--base-margin);
    background-color: var(--bg-color);
  }

  .key-value-card_value {
    padding: var(--base-margin);
    background-color: var(--bg-color-bright-1);
  }
}
</style>
