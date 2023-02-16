import { usePlayerStore } from "@/stores/player.store";
import type { Router } from "vue-router";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { defineModules } from "../components/appAside/data/modules";
import { flatMap, forEach, map } from "lodash-es";
export const defineRouterAuth = (router: Router) => {
  router.beforeEach((to, from) => {
    // const toName = to.name;
    // const pages = flatMap(defineModules().value, (module) => {
    //   module.pages.forEach((page) => {
    //     Object.defineProperty(page, "module", {
    //       value: module.show,
    //     });
    //   });
    //   return module.pages;
    // });
    // console.log("pages: ", pages);
  });
};
