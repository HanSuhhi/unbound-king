import { storeToRefs } from "pinia";
import { useAppAsideStore } from "../store/aside.store";
import { useCsssMenu } from "csss-ui";
import { computed } from "vue";

export const defineMenuLayout = () => {
  const { activeModule } = storeToRefs(useAppAsideStore());

  const asideMenu = computed(() => {
    const menu = useCsssMenu({
      state: {
        menuList: activeModule.value.config,
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
    return menu;
  });

  return { asideMenu };
};

// const route = useRoute();
// watch(route, (_route) => {
//   const path = _route.path.slice(1);
//   const findRoute = (menus: ModuleList[] = state.value.menuList as any): number[] => {
//     for (const i in menus) {
//       const item = menus[i];
//       console.log("item: ", item);
//       if (item.children) {
//         const index = findRoute(item.children);
//         return [Number(i), ...index];
//       }
//       if (item.path === path) return [Number(i)];
//     }
//     return [];
//   };
//   console.log("findRoute(): ", findRoute());
//   state.value.active = findRoute();
// });
