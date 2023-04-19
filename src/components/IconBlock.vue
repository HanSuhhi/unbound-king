<script setup lang="ts">
defineProps<{ iconPath: string; translator: Translator }>();
</script>

<template>
  <section class="common-block icon-block">
    <icon class="icon-block_icon" :name="iconPath" />
    <span class="icon-block_title">{{ translator[1] }}</span>
  </section>
</template>

<style scoped>
.icon-block_icon {
  min-width: 2em;
  min-height: 2em;
}

.icon-block_title {
  margin-top: var(--small);
}
</style>
