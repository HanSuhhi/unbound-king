<script setup lang="ts">
import type { ButtonProp } from "./button.type";

const { plain = false } = defineProps<ButtonProp>();
</script>

<template>
  <type-button :plain="plain" color="title" class="title-button">
    <slot />
  </type-button>
</template>

<style scoped>
@layer component {
  .title-button {
    width: 100%;
    font-size: var(--font-body);
    color: var(--white-deep-2);
    filter: saturate(90%);
  }
}
</style>
