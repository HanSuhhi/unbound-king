<script setup lang="ts">
import { throttle } from "lodash-es";
import { ref, watch } from "vue";
import { animationDuration } from "../../composables/constant/env";
import ResetInput from "./ResetInput.vue";

const props = withDefaults(defineProps<{ watchEvent: (...args: any) => any; placeholder?: string }>(), {
  placeholder: "请输入搜索内容..."
});

const value = ref("");

watch(value, throttle(props.watchEvent, animationDuration));
</script>

<template>
  <div class="search-input" flex_center>
    <icon name="search-eye" />
    <reset-input v-model="value" class="search-input_input" :placeholder="placeholder" />
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
