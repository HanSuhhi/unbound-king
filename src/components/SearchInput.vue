<script setup lang="ts">
import { defineItemsSearch } from "@/composables/components/ItemsSearch";
import { throttle } from "lodash-es";
import { watch, ref } from "vue";
import { animationDuration } from "../composables/constant/env";
import { NInput } from "naive-ui";

const props = defineProps<{ watchEvent: (...args: any) => any }>();

// const { COMP: Input, state: InputState } = defineItemsSearch();
const value = ref("");

watch(value, throttle(props.watchEvent, animationDuration));
</script>

<template>
  <div class="search-input" flex_center>
    <icon name="search-eye" />
    <input v-model="value" class="input-reset search-input_input" />
  </div>
</template>

<style scoped>
.search-input {
  width: fit-content;
  border-bottom: var(--border);
}

.search-input_input {
  padding: var(--mini) var(--small);
  border: none;
  border-radius: 0;
  transition: all var(--transition-prop);
}

.search-input:active {
  width: 100%;
}
</style>
