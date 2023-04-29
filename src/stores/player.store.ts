import { defineStore } from "pinia";
import { ref } from "vue";

const usePlayerStore = defineStore("player-store", () => {
  const states = ref({
    aside_dev_entry: true,
    aside_project_entry: true,
    aside_setting_entry: true
  });

  return { states };
});

export { usePlayerStore };
