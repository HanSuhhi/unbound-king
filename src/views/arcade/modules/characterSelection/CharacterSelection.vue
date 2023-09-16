<script setup lang='ts'>
import { key_regist_character } from "./composables/character";
import CharacterList from "./components/CharacterList.vue";
import KeyEventButton from "@/components/typeButton/KeyEventButton.vue";

const [confirm] = key_regist_character();
</script>

<template>
  <article class="character-selection">
    <character-list class="character-selection_left" />
    <section class="character-selection_right">
      <key-event-button :key-event="confirm!" />
    </section>
  </article>
</template>

<style scoped>
@layer page {
  .character-selection {
    display: flex;
  }

}
</style>
