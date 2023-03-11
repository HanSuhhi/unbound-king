<script setup lang="ts">
import IconBlock from "@/modules/baseIcon/components/IconBlock.vue";
import { delay } from 'lodash-es';
import { ref } from 'vue';
import { DATA_BaseIcons } from "../data/baseIcon.data";

const container = ref<HTMLElement>();
const defineMaxWidth = () => {
  const width = document.querySelector(".base-icon_header")?.getBoundingClientRect().width;
  container.value!.style.width = `${width}px`;
};
delay(defineMaxWidth, 0);
</script>

<template>
  <article ref="container" class="icon-dashboard">
    <icon-block v-for="icon, key in DATA_BaseIcons" :key="key" :icon="icon" class="icon-dashboard_block" />
  </article>
</template>

<style scoped>
.icon-dashboard {
  --column-count: 16;

  display: grid;
  grid-template-columns: repeat(var(--column-count), 1fr);
}

.icon-dashboard_block {
  box-sizing: border-box;
}

.icon-dashboard_block:nth-child(-n + 16) {
  border-top: 1px solid var(--border-color);
}

.icon-dashboard_block:last-child {
  border-right: 1px solid var(--border-color);
}

.icon-dashboard_block:nth-child(16n) {
  border-right: 1px solid var(--border-color);
}
</style>
