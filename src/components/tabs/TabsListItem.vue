<script setup lang="ts">
import { size } from "lodash";
import NumberMark from "../NumberMark.vue";

defineProps<{ message: TabListItem }>();
</script>

<template>
  <div class="tabs-list-item">
    <icon class="mr-small" :name="message.icon" />
    <span class="tabs-list-item_title">{{ message.name }}</span>
    <number-mark class="ml-mini">
      {{ size(message.injectData) }}
    </number-mark>
  </div>
</template>

<style scoped>
@layer component {
  .tabs-list-item {
    display: flex;
    align-items: center;
  }
}
</style>
