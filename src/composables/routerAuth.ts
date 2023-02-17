import { useAppAsideStore } from "@/components/appAside/store/aside.store";
import { usePlayerStore } from "@/stores/player.store";
import { find } from "lodash-es";
import { storeToRefs } from "pinia";
import type { Router } from "vue-router";

export const defineModuleAuthKey = (key: string) => `aside_${key}_entry`;

export const defineRouterAuth = (router: Router) => {
  const redirectPage = (page: ModulePage) => {
    if (page.redirect) {
      router.push({ name: page.redirect });
    }
  };

  router.beforeEach((to, from) => {
    const { pages } = storeToRefs(useAppAsideStore());
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

    redirectPage(toPage);
  });
};
