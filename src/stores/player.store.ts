import type { Auth } from "@/auth/auth";
import { defineStore } from "pinia";
import { ref, watch } from "vue";

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
  };

  const states = ref({
    setting_dev_entry: false,
    aside_dev_entry: false,
  });

  return { authOperations, states };
});

export { usePlayerStore };
