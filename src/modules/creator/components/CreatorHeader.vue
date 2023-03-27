<script setup lang="ts">
import ItemCard from "@/components/ItemCard.vue";
import { scroll } from "@/composables/wheelScroll";
import type { Ref } from "vue";
import { ref, inject } from "vue";
import { DATA_Creators } from "../data";

const ele = ref<HTMLElement>();
const creatorKey = inject<Ref<CreatorKey>>("creator-key");

const choosed = (key: CreatorKey) => {
  creatorKey!.value = key;
};
</script>

<template>
  <div ref="ele" class="item-cards" @wheel.prevent="scroll(ele!, $event)">
    <item-card v-for="(creator, key) of DATA_Creators" :key="key" :class="{ choosed: creatorKey === key }" :icon="creator.icon" @triggered="choosed(key)">
      <template #title>{{ creator.translator.title }}</template>
      <template #number>{{ creator.plugins.length }}</template>
      <template #description>{{ creator.description }}</template>
    </item-card>
  </div>
</template>

<style scoped>
.item-cards {
  display: flex;
  overflow: auto;
}

.choosed {
  border: 1px solid var(--main-color);
}
</style>
