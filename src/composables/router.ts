import { map } from "lodash-es";
import type { Component } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const pages = import.meta.glob<Record<"default", Component>>("@/views/**/*.tsx", {
  eager: true,
});

export const useRouteConfig = async () => {
  const routes = map(pages, (component, path) => {
    const paths = path.split("/");
    const _path = paths[paths.length - 2];
    return { path: `/${_path}`, component: component.default };
  }) as unknown as RouteRecordRaw[];

  routes.unshift({
    path: "/",
    redirect: "/heroes",
  });

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  return { router };
};
