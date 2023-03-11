import Icon from '@/components/Icon.vue';
<script setup lang="ts">
defineProps<{
  message: TabListItem;
}>();
</script>

<template>
  <Icon :icon="message.icon" />
  {{ message.tranlator.title }}
</template>

<style scoped>
.icon {
  display: inline-block;
  margin-right: var(--small);
}
</style>
