<script setup lang='ts'>
defineProps<{
  icon: BaseIconName
}>();
</script>

<template>
  <div class="aside-menu-icon">
    <icon :name="icon" />
  </div>
</template>

<style scoped>
@layer component {
  .aside-menu-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: var(--mini);

    font-size: calc(var(--normal) * 1.4);
    color: var(--gray-deep-2);

    background-color: var(--white-deep-2);
    border-radius: var(--border-radius);
  }
}
</style>
