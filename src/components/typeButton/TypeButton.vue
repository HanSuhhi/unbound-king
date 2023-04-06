<script setup lang="ts">
import { NButton } from "naive-ui";
import { watch, watchEffect } from "vue";
import "./button-color.css";

const props = withDefaults(
  defineProps<{
    color?: "blue" | "red" | "green" | "default";
    plain?: boolean
  }>(),
  {
    color: "default",
  },
);

</script>

<template>
  <n-button class="type-button" :class="[`type-button_${color}`, plain && `type-button_plain`]">
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
  padding: var(--small) calc(var(--small) * 4);
  font-size: var(--font-title-small);
  white-space: nowrap;
  background-image: linear-gradient(225deg, var(--bg-color-sub) 0%, var(--bg-color-main) 55%);
  border: var(--border);
  border-radius: var(--border-radius);
  box-shadow: none;
  transition: all var(--transition-prop);
  zoom: 0.8;
}
</style>
