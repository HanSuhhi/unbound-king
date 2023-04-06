import { useCsssLayout } from "@/components/ui/layout";

export const useTableHeader = () => {
  const { COMP: Layout } = useCsssLayout({
    style: {
      property: {
        "--aside-width": "40%",
      },
    },
  });


  return { Layout };
};
