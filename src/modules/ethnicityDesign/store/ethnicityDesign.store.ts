import { defineStore } from "pinia";
import { ref } from "vue";

const useEthnicityDesignStore = defineStore("ethnicity-design", () => {
  const currentType = ref(0);

  return { currentType };
});
export { useEthnicityDesignStore };
