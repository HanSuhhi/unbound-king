<script setup lang='ts'>
import { provide } from 'vue';
import { defineMainLayout } from '../composables/mainLayout';
import ResultType from './ResultType.vue';
import SearchFilter from './SearchFilter.vue';
import SearchInput from "./SearchInput.vue";

const { COMP, style } = defineMainLayout();

provide("layout-style", style);
</script>

<template>
  <c-layout ref="COMP" class="ethnicity-main">
    <template #header>
      <SearchInput />
    </template>
    <template #aside>
      <SearchFilter />
    </template>
    <ResultType />
  </c-layout>
</template>

<style scoped>
.ethnicity-main {
  position: relative;

  /* padding: var(--base-margin) 0; */
}
</style>
