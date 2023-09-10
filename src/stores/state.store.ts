import { defineStore } from "pinia";
import { ref } from "vue";
import { useLoadingBar } from "naive-ui";
import { delay } from "lodash";
import { GameState, State } from "@/enums/state.enum";
import { TRANSITION_DURATION } from "@/composables/constant/env";

const useStateStore = defineStore("state", () => {
  const STATE = ref<State>(State.Auth);
  const GAME_STATE = ref<GameState>();
  const loadingBar = useLoadingBar();

  const defineLoadingbarFn = <T extends () => Promise<void>>(fn: T) => async () => {
    loadingBar.start();
    await fn();
    delay(() => {
      loadingBar.finish();
    }, TRANSITION_DURATION);
  };

  const stateToStartGame = defineLoadingbarFn(async () => {
    STATE.value = State.Game;
    GAME_STATE.value = GameState.CharacterSelection;
  });

  const stateToRegistCharacter = defineLoadingbarFn(async () => {
    STATE.value = State.Game;
    GAME_STATE.value = GameState.RegistCharacter;
  });

  return {
    STATE,
    GAME_STATE,
    stateToStartGame,
    stateToRegistCharacter
  };
});
export { useStateStore };
