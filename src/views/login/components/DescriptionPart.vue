<script setup lang='ts'>
import type { DescriptionType } from "../types/description-type";

const { title, content } = defineProps<DescriptionType>();
</script>

<template>
  <ul class="description_part ul-reset">
    <li class="description_part_title p-reset">
      {{ title }}
    </li>
    <li class="description_part_content p-reset">
      {{ content }}
    </li>
  </ul>
</template>

<style scoped>
@layer component {
  .description_part {
    margin: calc(2 * var(--base-margin)) 0;
  }

  .description_part_title {
    font-size: var(--font-title-main);
    font-weight: bold;
  }

  .description_part_content {
    margin-left: var(--base-margin);
    font-size: var(--font-title-small);
  }
}
</style>
