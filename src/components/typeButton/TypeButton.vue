<script setup lang="ts">
import { NButton } from "naive-ui";
import "./button-color.css";

withDefaults(
  defineProps<{
    color?: "blue" | "red" | "green" | "default"
    plain?: boolean
  }>(),
  {
    color: "default"
  }
);
</script>

<template>
  <n-button v-paper-ripple class="type-button" :class="[`type-button_${color}`, plain && `type-button_plain`]">
    <slot />
  </n-button>
</template>

<style scoped>
.type-button_plain {
  background-image: none !important;
}

.type-button {
  position: relative;
  top: 0;
  padding: calc(var(--small) * 0.8) calc(var(--small) * 4 * 0.8);
  font-size: calc(var(--font-title-small) * 0.8);
  white-space: nowrap;
  background-image: linear-gradient(225deg, var(--bg-color-sub) 0%, var(--bg-color-main) 55%);
  border: var(--border);
  border-radius: var(--border-radius);
  box-shadow: none;
  transition: all var(--transition-prop);
}
</style>
