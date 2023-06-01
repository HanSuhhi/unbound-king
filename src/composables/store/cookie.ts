import type { WritableComputedRef } from "vue";
import { computed } from "vue";
import { useCookies } from "@vueuse/integrations/useCookies";
import type { Cookie } from "./enums/cookie.enum";

export function useStringCookie(key: Cookie): WritableComputedRef<string> {
  const { get, set } = useCookies();

  const cookie = computed<string>({
    get: () => get(key),
    set: (text) => {
      set(key, text);
    }
  });

  return cookie;
}
