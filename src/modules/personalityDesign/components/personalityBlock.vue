<script setup lang="ts">
defineProps<{ personality: Personality }>();
</script>

<template>
  <section class="common-block personality-block">
    <icon class="personality-block_icon" :name="personality.icon" />
    <span class="personality-block_title">{{ personality.translator[1] }}</span>
  </section>
</template>

<style scoped>
.personality-block_icon {
  min-width: 2em;
  min-height: 2em;
}

.personality-block_title {
  margin-top: var(--small);
}
</style>
