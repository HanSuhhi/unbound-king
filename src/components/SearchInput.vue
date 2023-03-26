<script setup lang='ts'>
import { defineItemsSearch } from '@/composables/components/ItemsSearch';
import { throttle } from 'lodash-es';
import { watch } from 'vue';
import { animationDuration } from '../composables/constant/env';

const props = defineProps<{ watchEvent: (...args: any) => any }>();

const { COMP: Input, state: InputState } = defineItemsSearch();

watch(
  () => InputState.value?.model,
  throttle(props.watchEvent, animationDuration),
);

</script>

<template>
  <c-input ref="Input" class="search-input">
    <template #header>
      <icon name="search-eye" />
    </template>
  </c-input>
</template>

<style scoped>
.search-input {
  width: 70%;
  padding: var(--small);
  padding-bottom: var(--mini);
  border: none;
  border-bottom: var(--border);
  border-radius: 0;
  transition: all var(--transition-prop);
}

.search-input[data-active] {
  width: 100%;
}
</style>