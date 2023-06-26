import { kebabCase, map } from "lodash";
import type { Component } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import { ROUTER_DEFAULT_PAGE } from "../constant/env";
import { Prefix } from "#/composables/constant/url";
import Auth from "@/views/login/Login.vue";
import Garden from "@/views/garden/Garden.vue";
import Arcade from "@/views/arcade/Arcade.vue";

const pages = import.meta.glob<Record<"default", Component>>("@/modules/*/*.{tsx,vue}");

export function useRouteConfig() {
  const _routes: RouteRecordRaw[] = map(pages, (_, path) => {
    const paths = path.split("/");
    const name = kebabCase(paths[paths.length - 2]);
    return {
      path: `${name}`,
      component: pages[path],
      name
    };
  });

  _routes.push({
    path: "",
    redirect: ROUTER_DEFAULT_PAGE
  });
  _routes.push({
    path: "setting",
    name: "setting",
    component: () => import("@/modules/setting/BaseSetting.vue")
  });

  const routes: RouteRecordRaw[] = [
    {
      path: "/",
      redirect: ROUTER_DEFAULT_PAGE
    },
    {
      path: "/auth",
      component: Auth
    },
    {
      path: "/arcade",
      component: Arcade
    },
    {
      path: `/${Prefix.Client}`,
      redirect: ROUTER_DEFAULT_PAGE
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: ROUTER_DEFAULT_PAGE
    },
    {
      path: "/garden",
      component: Garden,
      children: _routes
    }
  ];

  const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory(Prefix.Client) : createWebHistory(Prefix.Client),
    routes
  });

  return { router };
}

export const releaseRoutes = ["setting"];
