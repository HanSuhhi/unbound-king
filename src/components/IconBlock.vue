<script setup lang="ts">
import { NGradientText } from "naive-ui";

defineProps<{ iconPath: string; translator: Translator; color?: Color }>();
</script>

<template>
  <section relative cursor-pointer class="common-block icon-block">
    <icon class="icon-block_icon" :name="iconPath" :color="color" />
    <component
      :is="color ? NGradientText : 'span'"
      class="ml—small"
      :gradient="color ? {
        from: color[0],
        to: color[1],
      } : null"
    >
      {{ translator[1] }}
    </component>
  </section>
</template>

<style scoped>
@layer component {
  .icon-block_icon {
    min-width: 2em;
    min-height: 2em;
  }
}
</style>
