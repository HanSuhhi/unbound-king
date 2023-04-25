<script setup lang='ts'>

</script>

<template>
  <section class="aside-setting">
    <input class="aside-setting_input input-reset" placeholder="请输入搜索模块名...">
  </section>
</template>

<style scoped>
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
</style>
