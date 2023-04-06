import { useCsssLayout } from "@/components/ui/layout";
import { provide } from "vue";

export const defineMainLayout = (name = "creator") => {
  const layout = useCsssLayout({
    state: {
      reverse: true,
      layoutType: "aside",
    },
    style: {
      classList: {
        layout: ["", name],
        main: ["", `${name}_main`],
        header: ["", `${name}_header`],
        aside: ["", `${name}_aside`],
      },
      property: {
        "--aside-width": import.meta.env.BOX_EXTEND_WIDTH,
      },
    },
  });

  provide("layout-style", layout.style);

  return { ...layout };
};
