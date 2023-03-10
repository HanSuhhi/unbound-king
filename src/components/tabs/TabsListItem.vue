<script setup lang='ts'>
defineProps<{
  message: TabListItem
}>();
</script>

<template>
  <div class="icon" :class="message.icon" />
  {{ message.tranlator.title }}
</template>

<style scoped>
.icon {
  display: inline-block;
  margin-right: var(--small);
}
</style>