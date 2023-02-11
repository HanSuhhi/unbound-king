import { useCsssMenu } from "csss-ui";
import { useRoute } from "vue-router";
import { watch, watchEffect } from "vue";
import { forEach, map } from "lodash-es";

export const useAuthModule = () => {
  const { COMP: List, state } = useCsssMenu({
    state: {
      menuList: <ModuleList[]>[
        {
          path: "heroes",
          name: "英雄选择",
          icon: "i-mdi-horse-human",
          children: [
            {
              path: "asd",
            },
          ],
        },
      ],
    },
    style: {
      classList: {
        menu: ["auth-module"],
        items: {
          0: ["menu-module-0"],
        },
      },
    },
  });

  const route = useRoute();
  watch(route, (_route) => {
    const path = _route.path.slice(1);
    const findRoute = (menus: ModuleList[] = state.value.menuList as any): number[] => {
      for (const i in menus) {
        const item = menus[i];
        if (item.children) {
          const index = findRoute(item.children);
          return [Number(i), ...index];
        }
        if (item.path === path) return [Number(i)];
      }
      return [];
    };
    state.value.active = findRoute();
  });

  return { List };
};
