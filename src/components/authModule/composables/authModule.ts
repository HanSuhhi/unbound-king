import { useCsssMenu } from "csss-ui";

export const useAuthModule = () => {
  const { COMP: List } = useCsssMenu({
    state: {
      menuList: <ModuleList[]>[
        {
          name: "xx 管理",
          icon: "i-mdi-horse-human",
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

  return { List };
};
