<script setup lang="ts">
import { NButton } from "naive-ui";
import { computed } from "vue";
import type { ButtonProp } from "./button.type";
import { useHtmlPropLint } from "@/composables/util/htmlPropLint";
import "./button-color.css";

const { color = "default", plain } = defineProps<ButtonProp>();

const isPlain = computed(() => useHtmlPropLint(plain || false));
const buttonDynamicClassList = computed(() => [`type-button_${color}`]);
</script>

<template>
  <n-button v-paper-ripple cursor-pointer class="type-button" :plain="isPlain" :class="buttonDynamicClassList">
    <slot />
  </n-button>
</template>

<style>
@layer component {
  .type-button[plain] .n-button__border {
    border-image: var(--linear-gradient) 1;
  }
}
</style>

<style scoped>
@layer component {
  .type-button {
    --linear-gradient: linear-gradient(225deg, var(--bg-color-sub) 0%, var(--bg-color-main) 55%);

    position: relative;
    top: 0;

    padding: calc(var(--small) * 0.8) calc(var(--small) * 4 * 0.8);

    font-size: calc(var(--font-title-small) * 0.8);
    white-space: nowrap;

    background-image: var(--linear-gradient);
    border: var(--border);
    border-radius: var(--border-radius);
    box-shadow: none;

    transition: all var(--transition-prop);
  }

  .type-button[plain] {
    background-image: none;

    /* border: none; */
  }

}
</style>
