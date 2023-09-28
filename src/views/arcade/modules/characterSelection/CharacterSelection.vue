<script setup lang='ts'>
import { key_delete_character, key_regist_character } from "./composables/character";
import CharacterList from "./components/CharacterList.vue";
import { useCharacterList } from "./composables/form";
import KeyEventButton from "@/components/typeButton/KeyEventButton.vue";

const { list, index, choosedCharacterId } = useCharacterList();

const events = [
  key_regist_character(),
  key_delete_character(choosedCharacterId)
];
</script>

<template>
  <article class="character-selection">
    <character-list v-model="index" :list="list?.data.list" class="character-selection_main" />
    <section class="character-selection_operator">
      <template v-for="key_event, eventIndex of events!" :key="eventIndex">
        <key-event-button :key-event="key_event!" />
      </template>
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
