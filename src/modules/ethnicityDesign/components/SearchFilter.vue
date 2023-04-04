<script setup lang="ts">
import Extend from "@/components/Extend.vue";
import { useDelayExtend } from "@/composables/experience/delayExtend";
import { useHtmlPropLint } from "@/composables/util/htmlPropLint";
import { defineExtender } from "@/composables/experience/Extender";

const isExtend = defineExtender();
const delayExtend = useDelayExtend(isExtend);
</script>

<template>
  <article class="search-filter extender" :data-collapse="useHtmlPropLint(!isExtend)">
    <section class="search-filter_title">
      <span v-show="delayExtend" class="search-filter_word"> 过滤筛选 </span>
      <Extend class="search-filter_expand" :data-reverse="useHtmlPropLint(!isExtend)" @click="isExtend = !isExtend" />
    </section>
  </article>
</template>

<style scoped>
.search-filter {
  position: relative;
  box-sizing: border-box;
  min-width: 0;
  height: 100%;
  margin-left: calc(var(--root-base-margin) * -1);
  padding: var(--base-margin);
  border-top: var(--border);
  border-right: var(--border);
  transition: min-width var(--transition-prop);
}

.search-filter_title {
  display: flex;
}

.search-filter_expand {
  margin-left: auto;
  cursor: pointer;
}

.search-filter_word {
  white-space: nowrap;
}
</style>
