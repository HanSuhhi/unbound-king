import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { ResponseType_PostLoginWithEmail } from "@/api/services/auth";
import { Role } from "#/composables/enum/role.enum";

const useAuthStore = defineStore("auth", () => {
  const nickname = ref("");
  const email = ref("");
  const token = ref("");
  const roles = ref<ResponseType_PostLoginWithEmail["roles"]>([]);

  const isSighIn = computed(() => !!token.value);
  const isDeveloper = computed(() => roles.value.includes(Role.Developer));
  const isSuperAdmin = computed(() => roles.value.includes(Role.SuperAdmin));

  function resetUser() {
    nickname.value = "";
    email.value = "";
    token.value = "";
    roles.value = [];
  }

  return {
    isSighIn,
    isDeveloper,
    isSuperAdmin,
    token,
    roles,
    email,
    nickname,
    resetUser
  };
});

export { useAuthStore };
