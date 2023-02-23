<script setup lang='ts'>
import { useCsssButton } from 'csss-ui';
import { watch } from 'vue';
import "./button-color.css";

withDefaults(defineProps<{
  color?: "blue" | "red";
  size?: "large"
}>(), {
  color: "blue"
});

const { COMP, } = useCsssButton({
  style: {
    classList: {
      button: ["", "type-button"]
    },
    property: {
      "--padding-x": "calc(var(--small) * 4)",
      "--padding-y": "var(--mini)"
    }
  }
});

watch;
</script>

<template>
  <c-button ref="COMP" :color="color" :class="[size === 'large' ? 'type-button_large' : '', `type-button_${color}`]">
    <slot />
  </c-button>
</template>

<style scoped>
.type-button {
  position: relative;
  top: 0;
  white-space: nowrap;
  transform: scale(0.8);
}

.type-button:active {
  top: calc(var(--mini) * 0.7);
}

.type-button_large {
  --padding-y: var(--small) !important;
  --padding-x: calc(var(--normal) * 3) !important;
}
</style>