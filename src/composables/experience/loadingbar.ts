import type { MenuOption } from "naive-ui";
import { useLoadingBar } from "naive-ui";
import { storeToRefs } from "pinia";
import type { RouteLocationNormalized } from "vue-router";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";
import { delay } from "lodash";
import { TRANSITION_DURATION } from "../constant/env";
import { findError } from "./error";
import type { Role } from "#/server/modules/roles/enum/role.enum";
import { useAuthStore } from "@/stores/auth.store";
import { i18nLangModel } from "#/composables/i18n";
import { useDevStore } from "@/stores/dev.store";
import { useStateStore } from "@/stores/state.store";
import { State } from "@/enums/state.enum";
import { Prefix } from "#/composables/constant/url";

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
      if (item.children) {
        const foundItem = toggleActivePage(item.children, key);
        if (foundItem) return foundItem;
      }

      if (item.key === key) return item;
    }
    return null;
  };

  onMounted(() => {
    try {
      isRoleRight(useRoute());
    }
    catch (error) {
      setTimeout(() => {
        router.replace({ name: Prefix.Client_Game });
      }, 250);
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

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        activeAsideModule.value = modules.value.find((item: AsideModule) => item.keys.includes(to.name)) ?? activeAsideModule.value;
        const toPage = toggleActivePage(activeAsideModule.value!.pages, to.name as string);
        if (toPage) activePage.value = toPage ?? activePage.value;
        return true;
      }
      default:
        return true;
    }
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

          pushRoute([
            activePage.value.key as string,
            activePage.value.head as string,
            activePage.value.tip as BaseIconName
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
