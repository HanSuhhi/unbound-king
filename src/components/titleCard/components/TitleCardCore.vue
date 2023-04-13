<script setup lang="ts">
import "./title-card-core.css";
import type { Ref } from "vue";
import { useSlots } from "vue";

defineProps<{
  handle?: Ref;
  changeFixed?: Function;
}>();

const slots = useSlots();

const stopMouseEvent = () => {
  document.onmousemove = null;
};
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
