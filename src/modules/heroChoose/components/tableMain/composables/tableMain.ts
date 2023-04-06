import { useCsssLayout } from "@/components/ui/layout";

export const useTableMain = () => {
  const { COMP: Layout } = useCsssLayout({
    style: {
      classList: {
        layout: ["", "table-main"],
        header: ["", "table-main_header"],
        main: ["", "table-main_main"],
      },
      property: {
        "--header-height": "calc(40% + var(--height))",
      },
    },
  });

  return { Layout };
};
