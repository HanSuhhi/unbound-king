<script setup lang="ts">
import { size } from "lodash-es";
import NumberMark from "../NumberMark.vue";

const props = defineProps<{
  message: TabListItem
}>();
console.log("props: ", props.message);
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
</style>
