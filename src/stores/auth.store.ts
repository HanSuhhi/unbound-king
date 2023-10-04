import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import type { ResponseType_PostLoginWithEmail } from "@/api/services/auth";
import { Role } from "#/server/modules/roles/enum/role.enum";
import { Prefix } from "#/composables/constant/url";

const useAuthStore = defineStore("auth", () => {
  const { replace } = useRouter();
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

  function backToHome() {
    replace({ name: Prefix.Client_Dev_Default });
  }

  return {
    isSighIn,
    isDeveloper,
    isSuperAdmin,
    token,
    roles,
    email,
    nickname,
    resetUser,
    backToHome
  };
});

export { useAuthStore };
