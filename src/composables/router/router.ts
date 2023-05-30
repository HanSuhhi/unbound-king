import { kebabCase, map } from "lodash";
import type { Component } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import { URL_PREFIX } from "#/composables/constant/url";

const pages = import.meta.glob<Record<"default", Component>>("@/modules/*/*.{tsx,vue}");

export function useRouteConfig() {
  const routes: RouteRecordRaw[] = map(pages, (_, path) => {
    const paths = path.split("/");
    const name = kebabCase(paths[paths.length - 2]);
    return {
      path: `/${name}`,
      // component: () => import(/* @vite-ignore */ path),
      component: pages[path],
      name
    };
  });

  routes.unshift({
    path: "/",
    redirect: import.meta.env.ROUTER_DEFAULT_PAGE
  });
  routes.unshift({
    path: `/${URL_PREFIX}`,
    redirect: import.meta.env.ROUTER_DEFAULT_PAGE
  });

  routes.push({
    path: "/setting",
    name: "setting",
    component: () => import("@/modules/setting/BaseSetting.vue")
  });

  const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory(URL_PREFIX) : createWebHistory(URL_PREFIX),
    routes
  });

  return { router };
}

export const releaseRoutes = ["setting"];
