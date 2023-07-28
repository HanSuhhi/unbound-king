<script setup lang='ts'>
import { storeToRefs } from "pinia";
import CharacterSelection from "./modules/characterSelection/CharacterSelection.vue";
import { useStateStore } from "@/stores/state.store";
import { GameState } from "@/enums/state.enum";

const { GAME_STATE } = storeToRefs(useStateStore());
</script>

<template>
  <character-selection v-if="GAME_STATE === GameState.RoleChoose" />
</template>

<style scoped>
</style>
