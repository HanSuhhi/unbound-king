import { flatMap, find } from "lodash-es";
import type { Router } from "vue-router";
import { defineModules } from "../components/appAside/data/modules";
import { storeToRefs } from "pinia";
import { useAppAsideStore } from "@/components/appAside/store/aside.store";
import { usePlayerStore } from "@/stores/player.store";

export const defineModuleAuthKey = (key: string) => `aside_${key}_entry`;

export const defineRouterAuth = (router: Router) => {
  router.beforeEach((to, from) => {
    const { pages } = storeToRefs(useAppAsideStore());
    const { states } = storeToRefs(usePlayerStore());
    const toPage = find(pages.value, (page) => page.path === to.name);
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
  });
};
