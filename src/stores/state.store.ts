import { defineStore } from "pinia";
import { ref } from "vue";
import { GameState, State } from "@/enums/state.enum";

const useStateStore = defineStore("state", () => {
  const STATE = ref<State>(State.Auth);
  const GAME_STATE = ref<GameState>();

  const startGame = () => {
    STATE.value = State.Game;
    GAME_STATE.value = GameState.CharacterSelection;
  };

  return {
    STATE,
    GAME_STATE,
    startGame
  };
});
export { useStateStore };
