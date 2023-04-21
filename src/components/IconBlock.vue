<script setup lang="ts">
import { NGradientText } from "naive-ui";

defineProps<{ iconPath: string; translator: Translator; color?: Color }>();
</script>

<template>
  <section class="common-block icon-block">
    <icon class="icon-block_icon" :name="iconPath" :color="color" />
    <component
      :is="color ? NGradientText : 'span'"
      class="icon-block_title"
      :gradient="color ? {
        from: color[0],
        to: color[1],
      } : null"
    >
      {{ translator[1] }}
    </component>
    <!-- <span class="icon-block_title">{{ translator[1] }}</span> -->
  </section>
</template>

<style scoped>
.icon-block_icon {
  min-width: 2em;
  min-height: 2em;
}

.icon-block_title {
  margin-top: var(--small);
}
</style>
