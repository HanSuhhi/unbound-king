import type { Auth } from "@/auth/auth";
import { filter } from "lodash-es";
import { defineStore } from "pinia";
import { ref } from "vue";

const usePlayerStore = defineStore("player-store", () => {
  const auths = ref<Record<string, Auth>>({});

  const authOperations = {
    in: (ticket: string) => auths.value[ticket],
    add: (auth: Auth) => {
      if (auth.mount) auth.mount();
      auths.value[auth.ticket] = auth;
    },
    remove: (ticket: string) => {
      const auth = auths.value[ticket];
      if (!auth) return;
      if (auth.unmount) auth.unmount();
      delete auths.value[auth.ticket];
    },
    reset: () => filter(auths.value, (auth) => auth.from === "setting").forEach((auth) => authOperations.remove(auth.ticket)),
  };

  const states = ref({
    setting_dev_entry: false,
    aside_game_entry: true,
    aside_dev_entry: true,
    aside_auth_entry: true,
    aside_package_entry: true,
  });

  return { authOperations, states };
});

export { usePlayerStore };
