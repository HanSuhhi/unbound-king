<template>
  <a cursor-pointer class="a-reset sub-button">
    <slot />
  </a>
</template>

<style scoped>
@layer component {
  .sub-button {
    padding: calc(var(--mini) * 0.6) var(--normal);
    background: linear-gradient(100deg, var(--main-color-bright-1) 30%, var(--main-color-deep-2));
    border-radius: var(--border-radius);
  }
}
</style>
