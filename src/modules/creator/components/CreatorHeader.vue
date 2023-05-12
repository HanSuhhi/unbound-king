<script setup lang="ts">
import type { Ref } from "vue";
import { inject, ref } from "vue";
import { DATA_Creators } from "../data";
import ItemCard from "@/components/ItemCard.vue";
import { scroll } from "@/composables/experience/wheelScroll";

const ele = ref<HTMLElement>();
const creatorKey = inject<Ref<CreatorKey>>("creator-key");

function choosed(key: CreatorKey) {
  creatorKey!.value = key;
}
</script>

<template>
  <div ref="ele" class="item-cards" @wheel.prevent="scroll(ele!, $event)">
    <item-card
      v-for="(creator, key) of DATA_Creators" :key="key" :class="{ choosed: creatorKey === key }"
      :icon="creator.icon" @triggered="choosed(key)"
    >
      <template #title>
        {{ creator.translator[1] }}
      </template>
      <template #number>
        {{ creator.plugins.length }}
      </template>
      <template #description>
        {{ creator.description }}
      </template>
    </item-card>
  </div>
</template>

<style scoped>
@layer component {
  .item-cards {
    overflow: auto;
    display: flex;
  }

  .choosed {
    border: 1px solid var(--main-color);
  }
}
</style>
