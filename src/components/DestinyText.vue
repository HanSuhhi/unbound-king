<script setup lang='ts'>
import { NGradientText } from "naive-ui";

defineProps<{ destiny: Destiny; isChoosed?: boolean }>();
</script>

<template>
  <section cursor-pointer class="destiny-text">
    <icon class="mr-small" :name="destiny.icon" :color="destiny.color" />
    <component
      :is="isChoosed ? NGradientText : 'span'"
      :gradient="{
        from: destiny.color[0],
        to: destiny.color[1],
      }"
    >
      {{ destiny.translator[1] }}
    </component>
  </section>
</template>

<style scoped>
@layer component {
  .destiny-text {
    display: flex;
    place-items: center;
    white-space: nowrap;
  }
}
</style>
