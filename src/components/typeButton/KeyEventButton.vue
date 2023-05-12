<script setup lang="ts">
import KeyEvent from "../KeyEvent.vue";

defineProps<{ keyEvent: KeyEvent }>();
</script>

<template>
  <type-button class="key-event-button" @click="keyEvent.fn(false)">
    <key-event class="key-event-button_kbd" :key-event="keyEvent" reversed />
  </type-button>
</template>

<style scoped>
@layer component {
  .key-event-button_kbd :deep(kbd) {
    font-size: var(--font-title-small);
  }
}
</style>
