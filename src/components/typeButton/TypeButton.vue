<script setup lang="ts">
import { NButton } from "naive-ui";
import { computed } from "vue";
import { useHtmlPropLint } from "@/composables/util/htmlPropLint";
import "./button-color.css";

const props = withDefaults(
  defineProps<{
    color?: "blue" | "red" | "green" | "default"
    plain?: boolean
  }>(),
  {
    color: "default"
  }
);

const isPlain = computed(() => useHtmlPropLint(props.plain || false));
const buttonDynamicClassList = computed(() => [`type-button_${props.color}`]);
</script>

<template>
  <n-button v-paper-ripple cursor-pointer class="type-button" :plain="isPlain" :class="buttonDynamicClassList">
    <slot />
  </n-button>
</template>

<style scoped>
@layer component {
  .type-button {
    position: relative;
    top: 0;

    padding: calc(var(--small) * 0.8) calc(var(--small) * 4 * 0.8);

    font-size: calc(var(--font-title-small) * 0.8);
    white-space: nowrap;

    background-image: linear-gradient(225deg, var(--bg-color-sub) 0%, var(--bg-color-main) 55%);
    border: var(--border);
    border-radius: var(--border-radius);
    box-shadow: none;

    transition: all var(--transition-prop);
  }

  .type-button[plain] {
    background-image: none;
  }
}
</style>
