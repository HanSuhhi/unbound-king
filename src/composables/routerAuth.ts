import { useAppAsideStore } from "@/components/appAside/store/aside.store";
import { usePlayerStore } from "@/stores/player.store";
import { storeToRefs } from "pinia";
import type { Router } from "vue-router";
import { isEqual, defer } from "lodash-es";
import { nextTick } from "vue";

export const defineModuleAuthKey = (key: string) => `aside_${key}_entry`;

export const defineRouterAuth = (router: Router) => {
  const defineMaskPosition = (currentModule: AppAsideModule, index: number[]) => {
    const indexLength = index.length;
    let length: number = 0;
    A: {
      for (const page of currentModule.pages) {
        switch (indexLength) {
          default:
          case 1:
            if (page.children) {
              length += 1 + page.children.length;
              break;
            }
            if (isEqual(page.key, index)) break A;
            break;
          case 2:
            if (!page.children) {
              length += 1;
              break;
            }
            for (const pageChild of page.children) {
              length++;
              if (isEqual(pageChild.key, index)) break A;
            }
            break;
        }
      }
    }

    const ele = document.getElementsByClassName("app-aside_panel")[0] as HTMLElement;
    ele.style.setProperty("--mask-top", `${length}`);
    console.log(ele);
  };

  router.beforeEach((to, from) => {
    const { pages, modules, activeMenuIndex } = storeToRefs(useAppAsideStore());
    const { states } = storeToRefs(usePlayerStore());
    const toPage = pages.value.find((page) => page.path === to.name);
    const toModule = modules.value.find((module) => {
      return module.key === toPage?.module;
    });

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

    activeMenuIndex.value = toPage.key;

    defineMaskPosition(toModule!, toPage.key);
  });
};
