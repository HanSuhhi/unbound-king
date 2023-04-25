<script setup lang='ts'>
import { NGradientText } from "naive-ui";

defineProps<{ title: string; description: string }>();
</script>

<template>
  <header class="title-description">
    <n-gradient-text
      class="title-description_title"
      :gradient="{
        from: 'var(--main-color)',
        to: 'var(--main-color-bright-2)',
      }"
    >
      {{ title }}
    </n-gradient-text>
    <p className="p-reset title-description_description">
      {{ description }}
    </p>
  </header>
</template>

<style scoped>
.title-description_title {
  font-size: var(--font-title);
}

.title-description_description {
  color: var(--gray-bright-2);
}
</style>
