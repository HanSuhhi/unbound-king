<script setup lang="ts">
import type { Ref } from "vue";
import { useSlots } from "vue";

defineProps<{
  handle?: Ref
  changeFixed?: Function
}>();

const slots = useSlots();

function stopMouseEvent() {
  document.onmousemove = null;
}
</script>

<template>
  <header :ref="handle || undefined" class="title-card_header" @mouseup="stopMouseEvent" @mousedown="changeFixed?.($event) || undefined">
    <p class="title-card_title p-reset">
      <slot name="title" />
    </p>
    <p v-if="slots.subtitle" class="title-card_subtitle p-reset">
      <slot name="subtitle" />
    </p>
  </header>
  <section class="title-card_main">
    <slot />
  </section>
  <section v-if="slots.footer" class="title-card_footer">
    <slot name="footer" />
  </section>
</template>

<style scoped>
@layer component {
  .title-card_header {
    position: relative;

    overflow-x: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: var(--small) var(--padding);

    background-color: var(--bg-color-bright-2);
    border-bottom: 1px solid var(--gray-deep-2);
    border-top-left-radius: var(--border-radius-card);
    border-top-right-radius: var(--border-radius-card);
  }

  .title-card_title {
    display: flex;
    font-size: var(--font-title-small);
    white-space: nowrap;
  }

  .title-card_subtitle {
    display: flex;
    align-items: center;
    font-size: var(--font-body);
    color: var(--gray);
  }

  .title-card_main {
    position: relative;
    left: var(--padding);

    overflow: auto;
    flex: 1;

    width: calc(100% - 2 * var(--padding));
    height: 100%;
    min-height: var(--large);
    padding: var(--padding) 0;
  }

  .title-card_footer {
    padding: var(--base-margin);
    background-color: var(--bg-color);
    border-top: var(--border);
  }
}
</style>
