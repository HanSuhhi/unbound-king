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
.key-value-card {
  display: inline-flex;
  width: fit-content;
  border: var(--border);
  border-radius: var(--border-radius);
  filter: brightness(0.9);
}

.key-value-card_key {
  padding: var(--base-margin);
  background-color: var(--bg-color);
}

.key-value-card_value {
  padding: var(--base-margin);
  background-color: var(--bg-color-bright-1);
}
</style>
