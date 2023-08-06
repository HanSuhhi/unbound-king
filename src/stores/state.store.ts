import { defineStore } from "pinia";
import { ref } from "vue";
import { GameState, State } from "@/enums/state.enum";

const useStateStore = defineStore("state", () => {
  const STATE = ref<State>(State.Auth);
  const GAME_STATE = ref<GameState>();

  const stateToStartGame = () => {
    STATE.value = State.Game;
    GAME_STATE.value = GameState.CharacterSelection;
  };

  const stateToRegistCharacter = () => {
    STATE.value = State.Game;
    GAME_STATE.value = GameState.RegistCharacter;
  };

  return {
    STATE,
    GAME_STATE,
    stateToStartGame,
    stateToRegistCharacter
  };
});
export { useStateStore };
