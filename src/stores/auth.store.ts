import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { ResponseType_PostLoginWithEmail } from "@/api/services/auth";

const useAuthStore = defineStore("auth", () => {
  const nickname = ref("");
  const email = ref("");
  const token = ref("");
  const roles = ref<ResponseType_PostLoginWithEmail["roles"]>([]);

  const isSighIn = computed(() => !!token.value);

  return {
    isSighIn,
    token,
    roles,
    email,
    nickname
  };
});

export { useAuthStore };
