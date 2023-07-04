import { defineStore } from "pinia";
import { ref } from "vue";
import { State } from "@/enums/state.enum";

const useStateStore = defineStore("state", () => {
  const STATE = ref<State>(State.Auth);

  return {
    STATE
  };
});
export { useStateStore };
