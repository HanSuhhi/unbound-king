import { useCsssLayout } from "csss-ui";
import { watchEffect } from "vue";

export const useHeroes = () => {
  const { COMP: Layout } = useCsssLayout({
    state: {
      reverse: true,
    },
    style: {
      asideWidthSize: "large",
      classList: {
        main: ["", "heroes-main"],
        aside: ["", "heroes-aside"],
      },
    },
  });

  return { Layout };
};
