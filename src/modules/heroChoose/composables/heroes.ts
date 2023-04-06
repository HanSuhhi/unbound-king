import { useCsssLayout } from "@/components/ui/layout";
import { watchEffect } from "vue";

export const useHeroes = () => {
  const { COMP: Layout } = useCsssLayout({
    state: {
      reverse: true,
    },
    style: {
      classList: {
        layout: ["", "heroes"],
        main: ["", "heroes-main"],
        aside: ["", "heroes-aside"],
      },
      property: {
        "--aside-width": "27%",
      },
    },
  });

  return { Layout };
};
