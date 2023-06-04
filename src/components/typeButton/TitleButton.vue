<template>
  <type-button class="title-button">
    <slot />
  </type-button>
</template>

<style scoped>
@layer component {
  .title-button {
    width: 100%;
    font-size: var(--font-body);
    color: var(--white-deep-2);
    filter: saturate(90%);
  }
}
</style>
