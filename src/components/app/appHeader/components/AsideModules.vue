<script setup lang='ts'>
import { NPopover } from "naive-ui";
</script>

<template>
  <n-popover trigger="click" :delay="300" :show-arrow="false">
    <template #trigger>
      <section class="aside_modules_module">
        <icon name="module" />
      </section>
    </template>
    <span>
      Lately did you ever feel the pain In the morning rain as it soaks it to
      the bone
    </span>
  </n-popover>
</template>

<style scoped>
.aside_modules_module {
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: var(--base-margin);
  cursor: pointer;
  filter: brightness(0.7);
  transition: var(--transition-prop);
}

.aside_modules_module:hover {
  filter: brightness(1);
}

.aside_modules_module > .icon {
  font-size: 1.5rem;
}
</style>
