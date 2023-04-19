<script setup lang='ts'>
import AddButton from "../performance/AddButton.vue";
import SearchInput from "@/components/SearchInput.vue";

defineProps<{
  needAddButton?: boolean
}>();
</script>

<template>
  <footer class="operator">
    <search-input :watch-event="() => { }" />
    <add-button v-if="needAddButton" />
  </footer>
</template>

<style scoped>
.operator {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--base-margin);
  padding: var(--base-margin);
  background-color: var(--bg-color-bright-2);
  border: var(--border);
  border-radius: var(--border-radius);
}
</style>
