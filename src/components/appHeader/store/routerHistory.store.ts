import { useAppAsideStore } from "@/components/appAside/store/aside.store";
import { useGlobalStore } from "@/stores/global.store";
import { find, findIndex } from "lodash-es";
import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import type { RouteLocationNormalized } from "vue-router";
import { useRouter } from "vue-router";

const useRouterHistoryStore = defineStore("router-history", () => {
  const routes = ref<string[]>([]);
  const { activePage, activeAsideModule } = storeToRefs(useGlobalStore());
  const { pageTransition } = storeToRefs(useGlobalStore());
  const { pages, activeModules } = useAppAsideStore();
  const router = useRouter();

  const parsePage = (page: RouteLocationNormalized): ModulePage => {
    const _path = page.name as string;
    const _page = find(pages, (page) => page.path === _path) as ModulePage;
    return _page;
  };

  router.afterEach((to, from) => {
    const fromPage = parsePage(from);
    const toPage = parsePage(to);
    if (!toPage) return alert("error");

    const toName = toPage.title;
    if (!routes.value.includes(toName)) {
      routes.value.push(toName);
      pageTransition.value = "slide-left";
    } else {
      const fromIndex = findIndex(routes.value, (route) => route === fromPage.title);
      const toIndex = findIndex(routes.value, (route) => route === toPage.title);
      if (toIndex < fromIndex) pageTransition.value = "slide-right";
      else pageTransition.value = "slide-left";
    }

    if (toPage !== activePage.value) activePage.value = toPage;
    if (activeAsideModule.value?.key !== toPage.module) {
      const toModule = activeModules.find((module) => module.key === toPage.module);
      activeAsideModule.value = toModule;
    }
  });

  return { routes };
});
export { useRouterHistoryStore };
