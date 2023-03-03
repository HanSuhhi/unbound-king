<script setup lang='ts'>
import { provide } from 'vue';
import { defineMainLayout } from '../composables/mainLayout';
import EthnicityAdd from './EthnicityAdd';
import SearchFilter from './SearchFilter.vue';
import SearchInput from "./SearchInput.vue";
import SearchResult from './SearchResult.vue';

const { COMP, style } = defineMainLayout();

provide("layout-style", style);
</script>

<template>
  <c-layout ref="COMP" class="ethnicity-main">
    <template #header>
      <search-input />
    </template>
    <template #aside>
      <search-filter />
    </template>
    <search-result />
  </c-layout>
  <EthnicityAdd />
</template>


