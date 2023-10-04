<script setup lang='ts'>
import { storeToRefs } from "pinia";
import CarpVillageTavernCellar from "./maps/Carp_Village_Tavern_Cellar/CarpVillageTavernCellar.vue";
import { useGameStore } from "@/stores/game.store";
import { GameMap } from "@/enums/game-map.enum";

const { MapState } = storeToRefs(useGameStore());
</script>

<template>
  <div class="game-map">
    <carp-village-tavern-cellar v-if="MapState === GameMap.Carp_Village_Tavern_Cellar" />
  </div>
</template>

<style>
#app {
  overflow: hidden;
}
</style>

<style scoped>
.game-map {
  position: absolute;
  z-index: 999;

  /* transform: translate(0%, 0%); */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);

  width: 100%;
  height: 100%;

}
</style>
