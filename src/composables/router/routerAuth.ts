import { useAppAsideStore } from "@/components/app/appAside/store/aside.store";
import { usePlayerStore } from "@/stores/player.store";
import { storeToRefs } from "pinia";
import type { Router } from "vue-router";

export const defineModuleAuthKey = (key: string) => `aside_${key}_entry`;

export const defineRouterAuth = (router: Router) => {
  router.beforeEach((to) => {
    const { pages, activeMenuIndex } = storeToRefs(useAppAsideStore());
    const { states } = storeToRefs(usePlayerStore());
    const toPage = pages.value.find((page) => page.path === to.name);

    if (!toPage) {
      // @TODO turn to 404
      return false;
    }
    const auths = Array.from(toPage.auth);

    try {
      auths.forEach((auth) => {
        const pass = states.value[auth as keyof typeof states.value];
        if (!pass) throw "no permission";
      });
    } catch (error) {
      console.error(error);
      return false;
    }

    activeMenuIndex.value = toPage.key.join("-");
  });
};
