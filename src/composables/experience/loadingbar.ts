import { useLoadingBar } from "naive-ui";
import { storeToRefs } from "pinia";
import type { RouteLocationNormalized } from "vue-router";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";
import { delay } from "lodash";
import { ROUTER_DEFAULT_PAGE, TRANSITION_DURATION } from "../constant/env";
import { findError } from "./error";
import type { Role } from "#/composables/enum/role.enum";
import { useAuthStore } from "@/stores/auth.store";
import { i18nLangModel } from "#/composables/i18n";

function useRouterBefore() {
  const loadingBar = useLoadingBar();
  const router = useRouter();
  const { roles } = storeToRefs(useAuthStore());

  const isRoleRight = (to: RouteLocationNormalized) => {
    const { meta: { role } } = to;
    if (role && !roles.value.includes(role as Role)) throw new Error("No Right");
  };

  onMounted(() => {
    try {
      isRoleRight(useRoute());
    }
    catch (error) {
      router.replace({ name: ROUTER_DEFAULT_PAGE });
    }
  });

  router.beforeEach((to) => {
    loadingBar.start();
    try {
      isRoleRight(to);
    }
    catch (error) {
      findError(i18nLangModel.exception.visitUnauthorizedPage);
      return false;
    }
  });
}

function useRouteAfter() {
  const loadingBar = useLoadingBar();
  const router = useRouter();

  router.afterEach(async (to, from) => {
    delay(() => {
      loadingBar.finish();
    }, TRANSITION_DURATION);
  });
}
export function defineRouterChange() {
  useRouterBefore();
  useRouteAfter();
}
