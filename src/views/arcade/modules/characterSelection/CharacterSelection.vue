<script setup lang='ts'>
import { key_regist_character } from "./composables/character";
import CharacterList from "./components/CharacterList.vue";
import KeyEventButton from "@/components/typeButton/KeyEventButton.vue";

const [confirm] = key_regist_character();
</script>

<template>
  <article class="character-selection">
    <character-list class="character-selection_main" />
    <section class="character-selection_operator">
      <key-event-button :key-event="confirm!" />
    </section>
  </article>
</template>

<style scoped>
@layer page {
  .character-selection {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
  }

  .character-selection_main {
    flex: 1;
  }

  .character-selection_operator {
    display: flex;
    align-items: center;
    height: 8%;
  }
}
</style>
