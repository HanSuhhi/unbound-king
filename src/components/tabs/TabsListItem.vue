<script setup lang="ts">
import { size } from "lodash-es";
import NumberMark from "../NumberMark.vue";

defineProps<{
  message: TabListItem
}>();
</script>

<template>
  <div class="tabs-list-item">
    <icon :name="message.icon" />
    <span class="tabs-list-item_title">{{ message.name }}</span>
    <number-mark>{{ size(message.injectData) }}</number-mark>
  </div>
</template>

<style scoped>
.icon {
  margin-right: var(--small);
}

.tabs-list-item {
  display: flex;
  align-items: center;
}

.tabs-list-item_sub {
  transform: scale();
}
</style>
