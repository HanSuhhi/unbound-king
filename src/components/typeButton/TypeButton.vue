<script setup lang="ts">
import { useCsssButton } from "csss-ui";
import { watch, watchEffect } from "vue";
import "./button-color.css";

const props = withDefaults(
  defineProps<{
    color?: "blue" | "red" | "green" | "gray";
    size?: "large";
    transparent?: boolean;
  }>(),
  {
    color: "gray",
  },
);

const { COMP, style } = useCsssButton({
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

watchEffect(() => {
  if (props.transparent && style.value) {
    style.value.property["--bg-color-main"] = "transparent";
    style.value.property["--bg-color-sub"] = "transparent";
  }
});
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
