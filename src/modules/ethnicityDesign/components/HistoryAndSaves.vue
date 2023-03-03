<script setup lang='ts'>
import { defineExtender } from '@/composables/Extender';
import Extend from '@/components/Extend.vue';
import { useHtmlPropLint } from '@/composables/htmlPropLint';

const isExtend = defineExtender();
</script>

<template>
  <article class="history-saves">
    <header class="history-saves_header">
      <Extend class="history-saves_extend" :data-reverse="useHtmlPropLint(isExtend)" @click="isExtend = !isExtend" />
    </header>
  </article>
</template>

<style scoped>
.history-saves {
  box-sizing: border-box;
  height: 100%;
  padding: var(--base-margin);
  border-left: var(--border);
}

.history-saves_header {
  display: flex;
}

.history-saves_extend {
  cursor: pointer;
}
</style>