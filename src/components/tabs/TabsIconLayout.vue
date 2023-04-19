<template>
  <div class="tabs-body_icons">
    <slot />
  </div>
</template>

<style scoped>
.tabs-body_icons {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-left: var(--border);
}
</style>
