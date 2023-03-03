<script setup lang='ts'>
import ResultType from './ResultType.vue';
import { defineResultLayout } from '../composables/resultLayout';
import HistoryAndSaves from './HistoryAndSaves.vue';
import { provide } from 'vue';

const { COMP, style } = defineResultLayout();
provide("layout-style", style);

</script>

<template>
  <c-layout ref="COMP" class="search-result">
    <template #header>
      <result-type />
    </template>
    <template #aside>
      <history-and-saves />
    </template>
  </c-layout>
</template>

