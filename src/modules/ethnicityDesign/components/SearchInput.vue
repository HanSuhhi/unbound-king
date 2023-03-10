<script setup lang='ts'>
import { useCsssInput } from 'csss-ui';

const { COMP: Input, state } = useCsssInput({
  state: {
    active: true,
    placeholder: "输入关键字以进行搜索"
  },
  style: {
    classList: {
      header: ["", "search-input_header"],
      footer: ["", "search-input_footer"]
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
      <a class="search-input_confirm search-a a-reset" href="">探索</a>
    </template>
  </c-input>
</template>

<style scoped>
.search-input {
  --border-radius: var(--large);

  position: relative;
  width: var(--search-width);
  min-width: 400px;
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

.search-a {
  padding: var(--small) var(--large);
  font-weight: normal;
  font-size: var(--font-title);
  font-style: normal;
  letter-spacing: var(--mini);
  border-radius: var(--border-radius);
}

.search-input_confirm {
  display: block;
  text-align: center;
  background-color: var(--main-color);
  zoom: 0.9;
}

.search-input_add {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: calc(var(--mini) * 2);
  background-color: var(--blue-deep-1);

  /* transform: scale(0.9); */
}
</style>