<script setup lang='ts'>
import { useRequest } from "alova";
import { ref } from "vue";
import CharacterItem from "./CharacterItem.vue";
import { getList } from "@/api/services/character";

const { data } = useRequest(getList);

const choosedCharacterIndex = ref<number>(0);
</script>

<template>
  <section class="character-list">
    <template v-for="character, index of data?.data.list" :key="character.index">
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
