<script setup lang='ts'>
import CharacterItem from "./CharacterItem.vue";
import type { ResponseType_GetList } from "@/api/services/character";

const { list } = defineProps<{ list: ResponseType_GetList["list"] }>();
const choosedCharacterIndex = defineModel();
</script>

<template>
  <section class="character-list">
    <template v-for="character, index of list" :key="character.index">
      <character-item :name="character.name" :class="{ 'character-list_choosed': choosedCharacterIndex === index }" @click="choosedCharacterIndex = index" />
    </template>
  </section>
</template>

<style scoped>
@layer component {
  .character-list {
    display: grid;
    grid-gap: calc(2.2 * var(--large)) calc(var(--normal) * 1.5);
    grid-template-columns: repeat(4, calc(3 * var(--large)));
    grid-template-rows: repeat(auto-fill, var(--large));
  }
}
</style>
