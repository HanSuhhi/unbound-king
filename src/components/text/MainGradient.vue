<script setup lang='ts'>
import { NGradientText } from "naive-ui";

const useMainGradient = {
  from: "var(--main-color)",
  to: "var(--main-color-bright-2)"
};
</script>

<template>
  <n-gradient-text
    class="package-main_title"
    :gradient="useMainGradient"
  >
    <slot />
  </n-gradient-text>
</template>
