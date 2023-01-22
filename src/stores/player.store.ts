import { defineStore } from "pinia";
import { ref } from "vue";

const usePlayerStore = defineStore("player-store", () => {
  const auths = ref<string[]>([]);
  return { auths };
});

export { usePlayerStore };
