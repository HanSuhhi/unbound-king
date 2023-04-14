<script setup lang="ts">
import { throttle } from "lodash-es";
import { ref, watch } from "vue";
import { animationDuration } from "../composables/constant/env";

const props = defineProps<{ watchEvent: (...args: any) => any }>();

const value = ref("");

watch(value, throttle(props.watchEvent, animationDuration));
</script>

<template>
  <div class="search-input" flex_center>
    <icon name="search-eye" />
    <input v-model="value" class="input-reset search-input_input" placeholder="请输入搜索内容...">
  </div>
</template>

<style scoped>
.search-input {
  width: fit-content;
  border-bottom: var(--border);
}

.search-input_input {
  padding: var(--mini) var(--small);
  color: var(--white);
  border: none;
  border-radius: 0;
  transition: all var(--transition-prop);
}

.search-input:active {
  width: 100%;
}
</style>
