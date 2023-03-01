<script setup lang='ts'>
import { useCsssInput } from 'csss-ui';
import TypeButton from '@/components/typeButton/TypeButton.vue';

const { COMP: Input, state } = useCsssInput({
  state: {
    active: true,
    placeholder: "输入关键字以进行搜索"
  },
  style: {
    classList: {
      header: ["", "search-input_header"]
    }
  }
});
</script>

<template>
  <c-input ref="Input" class="search-input">
    <template #header>
      <div class="search-input_icon i-ri-search-eye-fill" />
    </template>
    <template #footer>
      <div class="" />
      <a class="search-input_confirm" href="">探索</a>
    </template>
  </c-input>
</template>

<style scoped>
.search-input {
  --border-radius: var(--large);

  position: relative;
  width: var(--search-width);
  min-width: 400px;
  margin: var(--base-margin);
  padding: calc(var(--mini) * 2);
}

.search-input :deep(.search-input_header) {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 var(--small);
}

.search-input_icon {
  font-size: var(--font-title-main);
}

.search-input_confirm {
  display: block;
  padding: var(--small) var(--large);
  color: var(--white);
  font-weight: normal;
  font-size: var(--font-title);
  font-style: normal;
  letter-spacing: var(--mini);
  text-align: center;
  text-decoration: none;
  background-color: var(--main-color);
  border-radius: var(--border-radius);
  zoom: 0.9;
}
</style>