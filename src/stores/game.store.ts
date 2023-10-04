import { defineStore } from "pinia";
import { ref } from "vue";
import { GameMap } from "@/enums/game-map.enum";

const useGameStore = defineStore("game-store", () => {
  const MapState = ref<GameMap>(GameMap.Carp_Village_Tavern_Cellar);

  return {
    MapState
  };
});
export { useGameStore };
