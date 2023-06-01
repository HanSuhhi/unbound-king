import { defineStore } from "pinia";
import { computed } from "vue";
import { useStringCookie } from "@/composables/store/cookie";
import { Cookie } from "@/composables/store/enums/cookie.enum";

const useAuthStore = defineStore("auth", () => {
  const tokenCookie = useStringCookie(Cookie.Token);

  const isSighIn = computed(() => !!tokenCookie.value);

  return {
    isSighIn
  };
});

export { useAuthStore };
