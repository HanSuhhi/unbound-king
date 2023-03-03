import { map } from "lodash-es";
import type { Component } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import { defineRouterAuth } from "./routerAuth";

const pages = import.meta.glob<Record<"default", Component>>("@/modules/*/*.{tsx,vue}", {
  eager: true,
});

const camelToKebab = (camelCaseString: string) => {
  return camelCaseString.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};

export const useRouteConfig = async () => {
  const routes = map(pages, (component, path) => {
    const paths = path.split("/");
    const name = camelToKebab(paths[paths.length - 2]);
    return { path: `/${name}`, component: component.default, name };
  }) as unknown as RouteRecordRaw[];

  routes.unshift({
    path: "/",
    redirect: "/hero-choose",
  });

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  defineRouterAuth(router);
  return { router };
};
