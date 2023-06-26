import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useAuthStore = defineStore("auth", () => {
  const token = ref("");

  const isSighIn = computed(() => !!token.value);

  return {
    isSighIn,
    token
  };
});

export { useAuthStore };
