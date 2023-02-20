<script setup lang='ts'>
import { useDestinyStore } from '../store/destiny.store';
import DestinyItemCard from './DestinyItemCard.vue';

const { destinies } = useDestinyStore();
</script>

<template>
  <article class="destiny-cards">
    <DestinyItemCard v-for="destiny in destinies" :key="destiny.key" :destiny="destiny" />
  </article>
</template>

<style scoped>
.destiny-cards {
  display: flex;
  min-width: calc(100% - var(--aside-width));
}
</style>
