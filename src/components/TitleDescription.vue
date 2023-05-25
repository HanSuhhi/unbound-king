<script setup lang='ts'>
import MainGradient from "@/components/text/MainGradient.vue";

defineProps<{ title: string; description: string }>();
</script>

<template>
  <header class="title-description">
    <main-gradient class="title-description_title">
      {{ title }}
    </main-gradient>
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
