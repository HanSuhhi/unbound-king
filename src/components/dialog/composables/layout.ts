import { useCsssLayout } from "csss-ui";

export const useDialogLayout = () => {
  const { COMP: Layout } = useCsssLayout({
    style: {
      classList: {
        layout: ["", "global-dialog"],
        main: ["", "global-dialog_main"],
        footer: ["", "global-dialog_footer"],
      },
    },
  });
  return { Layout };
};
