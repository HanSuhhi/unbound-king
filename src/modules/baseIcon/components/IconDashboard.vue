<script setup lang="ts">
import { ref } from "vue";
import { DATA_BaseIcons } from "../data/baseIcon.data";
import IconBlock from "@/modules/baseIcon/components/IconBlock.vue";

const container = ref<HTMLElement>();
</script>

<template>
  <article ref="container" class="icon-dashboard">
    <icon-block v-for="(icon, key) in DATA_BaseIcons" :key="key" :icon="icon as BaseIcon" class="icon-dashboard_block" />
  </article>
</template>

<style scoped>
@layer component {
  .icon-dashboard {
    display: flex;
    flex-wrap: wrap;
    border-top: var(--border);
    border-left: var(--border);
  }

  .icon-dashboard_block {
    box-sizing: border-box;
  }
}
</style>
