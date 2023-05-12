<template>
  <div class="number-mark">
    <slot />
  </div>
</template>

<style scoped>
@layer component {
  .number-mark {
    --padding-size: 1.2;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 0 var(--mini);

    font-size: var(--font-body-small);
    font-weight: bolder;
    color: var(--black);

    background-color: var(--gray-bright-1);
    border-radius: var(--border-radius);
  }
}
</style>
