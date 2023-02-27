<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores/global.store';

const { activeAsideModule, activePage } = storeToRefs(useGlobalStore());
</script>

<template>
  <section class="aside-setting">
    <span class="aside-setting_path">{{ activeAsideModule?.title }} >
      {{ activePage?.title }}
    </span>
    <div class="aside-setting_more i-material-symbols-more-horiz" />
  </section>
</template>

<style scoped>
.aside-setting {
  position: absolute;
  top: 0;
  left: var(--modules-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - var(--modules-width));
  height: calc(var(--history-height) * var(--zoom) - 1px);
  border-right: var(--border);
  border-bottom: var(--border);
}

.aside-setting_path {
  margin-left: calc(var(--base-margin) * 1);
  color: var(--gray-bright-1);
  font-weight: 500;
  font-size: var(--font-body-small);
}

.aside-setting_more {
  margin-right: calc(var(--base-margin) * 2);
}
</style>