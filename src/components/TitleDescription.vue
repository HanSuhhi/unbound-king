<script setup lang='ts'>
import { NGradientText } from "naive-ui";
import { useMainGradient } from "@/composables/constant/naiveStyle";

defineProps<{ title: string; description: string }>();
</script>

<template>
  <header class="title-description">
    <n-gradient-text class="title-description_title" :gradient="useMainGradient">
      {{ title }}
    </n-gradient-text>
    <p class="p-reset title-description_description">
      {{ description }}
    </p>
  </header>
</template>

<style scoped>
@layer component {
  .title-description_title {
    font-size: var(--font-title-main);
  }

  .title-description_description {
    color: var(--gray-bright-2);
  }
}
</style>
