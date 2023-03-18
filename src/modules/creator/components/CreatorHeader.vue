<script setup lang="ts">
import ItemCard from "@/components/ItemCard.vue";
import { scroll } from "@/composables/wheelScroll";
import { ref } from "vue";
import { DATA_Creators } from "../data";

const ele = ref<HTMLElement>();
</script>

<template>
  <div ref="ele" class="item-cards" @wheel.prevent="scroll(ele!, $event)">
    <item-card v-for="creator in DATA_Creators" :key="creator.translator.key" :icon="creator.icon">
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
</style>
