import type { MenuOption } from "naive-ui";
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
import { useDevStore } from "@/stores/dev.store";
import { useStateStore } from "@/stores/state.store";
import { State } from "@/enums/state.enum";

function useRouterBefore() {
  const loadingBar = useLoadingBar();
  const router = useRouter();
  const { roles } = storeToRefs(useAuthStore());
  const { STATE } = storeToRefs(useStateStore());

  const isRoleRight = (to: RouteLocationNormalized) => {
    const { meta: { role } } = to;
    if (role && !roles.value.includes(role as Role)) throw new Error("No Right");
  };

  const toggleActivePage = (items: MenuOption[], key: string): null | MenuOption => {
    for (const item of items) {
      if (item.key === key) return item;

      if (item.children) {
        const foundItem = toggleActivePage(item.children, key);
        if (foundItem) return foundItem;
      }
    }
    return null;
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

    switch (STATE.value) {
      case State.Dev: {
        const { modules, activePage, activeAsideModule } = storeToRefs(useDevStore());

        activeAsideModule.value = modules.value.find((item: AsideModule) => item.keys.includes(to.name)) ?? activeAsideModule.value;
        const toPage = toggleActivePage(activeAsideModule.value?.pages, to.name);
        if (toPage) activePage.value = toPage ?? activePage.value;
        break;
      }
      default:
        break;
    }
    return true;
  });
}

function useRouteAfter() {
  const loadingBar = useLoadingBar();
  const router = useRouter();

  const { STATE } = storeToRefs(useStateStore());

  router.afterEach(async (to, from) => {
    switch (STATE.value) {
      case State.Dev: {
        const { activePage } = storeToRefs(useDevStore());
        const { pushRoute } = useDevStore();

        if (activePage.value) {
          if (to.name === from.name) return false;

          const { props: { title, path } } = activePage.value.label() as any;
          const { props: { icon } } = activePage.value.icon() as any;

          pushRoute([
            path,
            title,
            icon
          ]);
        }
        break;
      }
      default:
        break;
    }
    delay(() => {
      loadingBar.finish();
    }, TRANSITION_DURATION);
  });
}
export function defineRouterChange() {
  useRouterBefore();
  useRouteAfter();
}
