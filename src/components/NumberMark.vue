<template>
  <div class="number-mark">
    <slot />
  </div>
</template>

<style scoped>
.number-mark {
  --padding-size: 1.2;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: var(--mini);
  padding: 0 var(--mini);
  color: var(--black);
  font-weight: bolder;
  font-size: var(--font-body-small);
  background-color: var(--gray-bright-1);
  border-radius: var(--border-radius);
}
</style>