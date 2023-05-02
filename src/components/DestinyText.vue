<script setup lang='ts'>
import { NGradientText } from "naive-ui";

defineProps<{ destiny: Destiny; isChoosed?: boolean }>();
</script>

<template>
  <section cursor-pointer class="destiny-text">
    <icon class="icon" :name="destiny.icon" :color="destiny.color" />
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
.destiny-text {
  display: flex;
  white-space: nowrap;
  place-items: center;
}

.icon {
  margin-right: var(--small);
}
</style>
