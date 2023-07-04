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
  const { modules, activePage, activeAsideModule } = storeToRefs(useDevStore());
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

  router.beforeEach((to, from) => {
    loadingBar.start();
    try {
      isRoleRight(to);
    }
    catch (error) {
      findError(i18nLangModel.exception.visitUnauthorizedPage);
      return false;
    }

    if (STATE.value === State.Dev) {
      activeAsideModule.value = modules.value.find((item: AsideModule) => item.keys.includes(to.name)) ?? activeAsideModule.value;
      const toPage = toggleActivePage(activeAsideModule.value.pages, to.name);
      if (toPage) activePage.value = toPage ?? activePage.value;
    }
    return true;
  });
}

function useRouteAfter() {
  const loadingBar = useLoadingBar();
  const router = useRouter();
  const { activePage } = storeToRefs(useDevStore());
  const { pushRoute } = useDevStore();

  router.afterEach(async (to, from) => {
    if (activePage.value) {
      if (to.name === from.name) return false;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const { props: { title, path } } = activePage.value.label() as any;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const { props: { icon } } = activePage.value.icon() as any;

      pushRoute([
        path,
        title,
        icon
      ]);
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
