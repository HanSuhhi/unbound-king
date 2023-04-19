<script setup lang="ts">
import IconBlock from "@/components/IconBlock.vue";

defineProps<{ personality: Personality }>();
</script>

<template>
  <icon-block :icon-path="personality.icon" :translator="personality.translator" />
</template>
