<script setup lang="ts">
import Icon from "../../../components/Icon.vue";

defineProps<{ icon: BaseIcon }>();
</script>

<template>
  <section class="icon-block">
    <icon class="icon-block_icon" :icon="icon" />
    <span class="icon-block_title">{{ icon.translator!.title }}</span>
  </section>
</template>

<style scoped>
.icon-block_icon {
  min-width: 2em;
  min-height: 2em;
}

.icon-block_title {
  margin-top: var(--small);
}

.icon-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  border: 1px solid var(--border-color);
  border-top: 0;
  border-right: 0;
  cursor: pointer;
  aspect-ratio: 1 / 1;
}

.icon-block:hover {
  background-color: var(--main-color-deep-1);
}

.icon-block:active {
  background-color: var(--main-color);
}
</style>
