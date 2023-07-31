<script setup lang='ts'>
import { storeToRefs } from "pinia";
import CharacterSelection from "./modules/characterSelection/CharacterSelection.vue";
import { useStateStore } from "@/stores/state.store";
import { GameState } from "@/enums/state.enum";

const { GAME_STATE } = storeToRefs(useStateStore());
</script>

<template>
  <div class="arcade">
    <character-selection v-if="GAME_STATE === GameState.RoleChoose" />
  </div>
</template>

<style scoped>
@layer page {
  .arcade {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
