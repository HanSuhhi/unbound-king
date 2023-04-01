<script setup lang="ts">
import { computed } from "vue";
import { DATA } from "../../../composables/data";
const props = defineProps<{ personality: Personality }>();
</script>

<template>
  <section class="common-block personality-block">
    <icon class="personality-block_icon" :name="personality.icon" />
    <span class="personality-block_title">{{ personality.translator.title }}</span>
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
