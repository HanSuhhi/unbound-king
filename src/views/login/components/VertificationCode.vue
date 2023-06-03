<script setup lang='ts'>
import { NInput } from "naive-ui";
</script>

<template>
  <div class="vertification-code">
    <n-input class="vertification-code_item" />
    <n-input class="vertification-code_item" />
    <n-input class="vertification-code_item" />
    <n-input class="vertification-code_item" />
    <n-input class="vertification-code_item" />
    <n-input class="vertification-code_item" />
  </div>
</template>

<style scoped>
@layer component {
  .vertification-code_item {
    width: 3rem;
  }
}
</style>
