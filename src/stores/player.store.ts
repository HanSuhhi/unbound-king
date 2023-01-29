import { defineStore } from "pinia";
import { ref } from "vue";

const usePlayerStore = defineStore("player-store", () => {
  const auths = ref<Record<string, boolean>>({});
  const authFuncs = {
    in: (auth: string) => auths.value[auth],
    add: (auth: string) => {
      auths.value[auth] = true;
    },
    remove: (auth: string) => (auths.value[auth] = false),
  };

  return { auth: authFuncs };
});

export { usePlayerStore };
