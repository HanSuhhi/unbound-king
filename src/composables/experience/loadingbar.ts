import { find, findIndex, isEmpty } from "lodash";
import { useLoadingBar } from "naive-ui";
import { storeToRefs } from "pinia";
import type { RouteLocationNormalized } from "vue-router";
import { useRoute, useRouter } from "vue-router";
import { TRANSITION_DURATION } from "../constant/env";
import { releaseRoutes } from "../router/router";
import { useGlobalStore } from "@/stores/global.store";
import { routes } from "@/components/app/global-header/GlobalHeader";
import { useAppAsideStore } from "@/components/app/appAside/store/aside.store";

function useRouterBefore() {
  const loadingBar = useLoadingBar();
  // const { }  = storeToRefs(useAuthStore());
  const router = useRouter();
  const { meta: { role } } = useRoute();

  if (role) {
  }

  // return router.push({ path: ROUTER_DEFAULT_PAGE });

  const isRoleRight = (to: RouteLocationNormalized) => {
  };

  router.beforeEach((to) => {
    const { pages, activeMenuIndex } = storeToRefs(useAppAsideStore());
    loadingBar.start();

    try {
      isRoleRight(to);
    }
    catch (error) {
      loadingBar.finish();
    }

    if (releaseRoutes.includes(to.name as string)) {
      activeMenuIndex.value = "";
      return true;
    }

    const toPage = pages.value.find(page => page.path === to.name);

    if (!toPage) {
      // @TODO turn to 404
      loadingBar.error();
      return false;
    }

    activeMenuIndex.value = toPage.key.join("-");
  });
}

function useRouteAfter() {
  const loadingBar = useLoadingBar();
  const router = useRouter();

  const { activePage, activeAsideModule } = storeToRefs(useGlobalStore());
  const { pageTransition } = storeToRefs(useGlobalStore());
  const { pages, activeModules } = useAppAsideStore();

  const parsePage = (page: RouteLocationNormalized): ModulePage => {
    const _path = page.name as string;
    const _page = find(pages, page => page.path === _path) || {};
    return _page as ModulePage;
  };

  router.afterEach(async (to, from) => {
    const fromPage = parsePage(from);
    const toPage = parsePage(to);
    const isReleaseRoute = releaseRoutes.includes(to.name as string);

    if (isEmpty(toPage) && !isReleaseRoute) {
      await router.push({ path: "/" });
      console.error("path error");
      return;
    }

    if (isReleaseRoute) {
      toPage.title = "设置";
      toPage.icon = "setting";
      toPage.path = "setting";
    }
    const { title, icon, path } = toPage;
    if (!routes.value.map(route => route[0]).includes(path)) {
      routes.value.unshift([path, title, icon]);
      pageTransition.value = "slide-left";
    }
    else {
      const fromIndex = findIndex(routes.value, route => route[0] === fromPage.path);
      const toIndex = findIndex(routes.value, route => route[0] === toPage.path);
      if (toIndex < fromIndex) pageTransition.value = "slide-right";
      else pageTransition.value = "slide-left";
    }

    if (toPage !== activePage.value) activePage.value = toPage;

    if (toPage.module && activeAsideModule.value?.key !== toPage.module) {
      const toModule = activeModules.find(module => module.key === toPage.module);
      activeAsideModule.value = toModule;
    }

    setTimeout(() => {
      loadingBar.finish();
    }, TRANSITION_DURATION);
  });
}
export function defineRouterChange() {
  useRouterBefore();
  useRouteAfter();
}
