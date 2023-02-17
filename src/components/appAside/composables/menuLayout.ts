import { storeToRefs } from "pinia";
import { useAppAsideStore } from "../store/aside.store";
import { useCsssMenu } from "csss-ui";
import { computed } from "vue";
import { useRouter } from "vue-router";

export const defineMenuLayout = () => {
  const { activeModule } = storeToRefs(useAppAsideStore());
  const router = useRouter();

  const initRoute = () => {
    const defaultPath = activeModule.value?.pages![0].path;
    // router.push({ name: defaultPath });
  };

  const asideMenu = computed(() => {
    initRoute();
    return useCsssMenu({
      state: {
        menuList: activeModule.value?.pages,
        active: [0],
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
  });

  return { asideMenu };
};
