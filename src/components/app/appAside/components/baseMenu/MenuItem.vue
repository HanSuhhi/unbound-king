<script setup lang='ts'>
import { RouterLink } from "vue-router";

defineProps<{
  title: string
  description: string
  path?: string
}>();
</script>

<template>
  <component :is="path ? RouterLink : 'section'" :to="{ name: path }">
    <div class="aside-menu-main">
      <span class="aside-menu-block_title">{{ title }}</span>
      <span class="aside-menu-block_description">{{ description }}</span>
    </div>
  </component>
</template>

<style scoped>
@layer component {
  .aside-menu-block {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    height: var(--title-height);
    padding: 0 var(--small);

    color: var(--gray);

    transition: var(--transition-prop);
    transition-property: color, background;
  }

  .aside-menu-main {
    width: 100%;
  }

  .aside-menu-block_title {
    position: relative;

    width: 100%;

    color: var(--white);
    text-align: left;
    white-space: nowrap;
  }

  .aside-menu-block_description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    font-size: var(--font-body-small);
    color: var(--gray);
    white-space: nowrap;
  }
}
</style>
