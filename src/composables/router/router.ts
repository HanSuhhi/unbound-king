import { kebabCase, map } from "lodash-es";
import type { Component } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const pages = import.meta.glob<Record<"default", Component>>("@/modules/*/*.{tsx,vue}", {
  eager: true
});

export function useRouteConfig() {
  const routes = map(pages, (component, path) => {
    const paths = path.split("/");
    const name = kebabCase(paths[paths.length - 2]);
    return { path: `/${name}`, component: component.default, name };
  }) as unknown as RouteRecordRaw[];

  routes.unshift({
    path: "/",
    redirect: import.meta.env.DEFAULT_ROUTE_INDEX
  });

  const router = createRouter({
    history: createWebHistory(),
    routes
  });

  return { router };
}
