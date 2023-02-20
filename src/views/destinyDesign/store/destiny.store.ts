import { defineStore } from "pinia";
import { ref } from "vue";
import { DATA_Destiny } from "../data/destiny.data";

const useDestinyStore = defineStore("destiny-store", () => {
  const destinies = ref<Destiny[]>(DATA_Destiny);

  return { destinies };
});
export { useDestinyStore };
