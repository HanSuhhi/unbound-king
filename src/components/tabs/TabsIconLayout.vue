<template>
  <div class="tabs-body_icons">
    <slot />
  </div>
</template>

<style scoped>
@layer component {
  .tabs-body_icons {
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    margin-bottom: var(--base-margin);

    border-left: var(--border);
  }
}
</style>
