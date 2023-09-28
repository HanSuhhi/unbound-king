import { kebabCase, map } from "lodash";
import type { Component } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import { ROUTER_DEFAULT_PAGE } from "../constant/env";
import { Prefix } from "#/composables/constant/url";
import Auth from "@/views/auth/Auth.vue";
import Garden from "@/views/garden/Garden.vue";
import Arcade from "@/views/arcade/Arcade.vue";
import { Role } from "#/composables/enum/role.enum";

const pages = import.meta.glob<Record<"default", Component>>("@/modules/*/*.{tsx,vue}");

export function useRouteConfig() {
  const _routes: RouteRecordRaw[] = map(pages, (_, path) => {
    const paths = path.split("/");
    const name = kebabCase(paths[paths.length - 2]);
    return {
      path: `${name}`,
      component: pages[path],
      meta: {
        role: Role.Developer
      },
      name
    };
  });

  _routes.push(...[
    {
      path: "",
      meta: {
        role: Role.Developer
      },

      redirect: { name: ROUTER_DEFAULT_PAGE }
    },
    {
      path: "setting",
      name: "setting",
      meta: {
        role: Role.Developer
      },
      component: () => import("@/modules/setting/BaseSetting.vue")
    }
  ]);

  const routes: RouteRecordRaw[] = [
    {
      path: "/",
      redirect: { name: ROUTER_DEFAULT_PAGE }
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth
    },
    {
      path: `/${Prefix.Client}`,
      redirect: { name: ROUTER_DEFAULT_PAGE }
    },
    // {
    //   // @TODO turn to 404
    //   path: "/:pathMatch(.*)*",
    //   redirect: { name: ROUTER_DEFAULT_PAGE }
    // },
    {
      path: `/${Prefix.Client_Game}`,
      name: `${Prefix.Client_Game}`,
      component: Arcade,
      meta: {
        role: Role.Player
      }
    },
    {
      path: `/${Prefix.Client_Dev}`,
      component: Garden,
      children: _routes,
      redirect: { name: Prefix.Client_Dev_Default }
    }
  ];

  const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory(Prefix.Client) : createWebHistory(Prefix.Client),
    routes
  });

  return { router };
}

export const releaseRoutes = ["setting"];
