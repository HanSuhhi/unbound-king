<script setup lang='ts'>
import { renderTextKeyEvent } from "@/composables/experience/key/keyEvent";
import { useHtmlPropLint } from "@/composables/util/htmlPropLint";

defineProps<{ text: string | string[]; reversed?: boolean }>();
</script>

<template>
  <kbd class="kbd-icon" :data-reversed="useHtmlPropLint(reversed || false)">
    {{ renderTextKeyEvent(text) }}
  </kbd>
</template>

<style scoped>
@layer component {
  .kbd-icon {
    --bg-color: var(--gray-deep-2);
    --color: var(--white-deep-2);

    padding: 0 var(--small);

    font-family: Jaldi, sans-serif;
    font-size: var(--font-body-small);
    font-weight: bold;
    color: var(--color);
    text-transform: uppercase;

    background-color: var(--gray-deep-2);
    border-top: 0.1px solid var(--gray-bright-1);
    border-radius: var(--border-radius);
  }

  .kbd-icon[data-reversed] {
    color: var(--gray-deep-2);
    background-color: var(--white-deep-2);
  }
}
</style>
