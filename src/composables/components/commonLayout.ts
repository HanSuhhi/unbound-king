import { provide } from "vue";
import { useCsssLayout } from "@/components/ui/layout";

export function defineCommonLayout(name: string, reverse = true) {
  const main = `${name}_main`;
  const aside = `${name}_aside`;

  const layout = useCsssLayout({
    state: {
      reverse
    },
    style: {
      classList: {
        layout: ["", name, "common-layout"],
        main: ["", main],
        aside: ["", aside]
      },
      property: {
        "--aside-width": import.meta.env.STYLE_EXTEND_WIDTH
      }
    }
  });

  provide("layout-style", layout.style);

  return {
    ...layout
  };
}
