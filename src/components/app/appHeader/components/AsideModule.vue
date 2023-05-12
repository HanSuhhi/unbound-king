<script setup lang='ts'>
import { runKeyEvent } from "@/composables/key/keyEvent";

defineProps<{
  module: AppHeaderModule
}>();
</script>

<template>
  <section v-paper-ripple cursor-pointer class="aside-module" flex_center @click="runKeyEvent(module.event)">
    <icon class="aside-module_icon" :style="{ background: `linear-gradient(145deg, ${module.color[0]}, ${module.color[1]})` }" :name="module.icon" />
  </section>
</template>

<style scoped>
@layer component {
  .aside-module {
    aspect-ratio: 1 / 1;
    width: 25px;
    padding: var(--base-margin);

    white-space: nowrap;

    background-color: var(--bg-color-bright-2);
    border-radius: var(--border-radius);

    transition: all var(--transition-prop);
  }

  .aside-module:hover {
    filter: brightness(1.2);
  }

  .aside-module:active {
    filter: brightness(0.9);
  }

  .aside-module_icon {
    font-size: calc(var(--font-title-main) * 1.2);
  }
}
</style>
