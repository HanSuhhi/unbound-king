<script setup lang='ts'>
import { ref } from "vue";

const model = ref();
</script>

<template>
  <section class="aside-setting">
    <input v-model="model" class="aside-setting_input input-reset" placeholder="请输入搜索模块名...">
  </section>
</template>

<style scoped>
@layer page {
  .aside-setting {
    position: absolute;
    top: calc(-1 * var(--header-block-height));
    left: var(--modules-width);

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: calc(100% - var(--modules-width));
    height: var(--header-block-height);

    border-right: var(--border);
  }

  .aside-setting_input {
    width: 100%;
    color: var(--white);
  }
}
</style>
