<script setup lang="ts">
import { useCsssButton } from "csss-ui";
import { watch } from "vue";
import "./button-color.css";

withDefaults(
  defineProps<{
    color?: "blue" | "red" | "green" | "gray";
    size?: "large";
  }>(),
  {
    color: "gray",
  },
);

const { COMP } = useCsssButton({
  style: {
    classList: {
      button: ["", "type-button"],
    },
    property: {
      "--padding-x": "calc(var(--small) * 4)",
      "--padding-y": "var(--small)",
    },
  },
});

watch;
</script>

<template>
  <c-button ref="COMP" :class="[`type-button_${color}`]">
    <slot />
  </c-button>
</template>

<style scoped>
.type-button {
  position: relative;
  top: 0;
  white-space: nowrap;
  border: var(--border);
  box-shadow: none;
  transform: scale(0.8);
}

.type-button:active {
  top: calc(var(--mini) * 0.7);
}
</style>
