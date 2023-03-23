<script setup lang="ts">
import ItemCard from "@/components/ItemCard.vue";
import { scroll } from "@/composables/wheelScroll";
import type { Ref } from "vue";
import { ref, inject } from "vue";
import { DATA_Creators } from "../data";

const ele = ref<HTMLElement>();
const tabsIndex = inject<Ref<number>>("creator-tabs-index");

const choosed = (index: number) => {
  tabsIndex!.value = index;
};
</script>

<template>
  <div ref="ele" class="item-cards" @wheel.prevent="scroll(ele!, $event)">
    <item-card v-for="(creator, index) of DATA_Creators" :key="creator.translator.key" :class="{ choosed: tabsIndex === index }" :icon="creator.icon" @triggered="choosed(index)">
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
