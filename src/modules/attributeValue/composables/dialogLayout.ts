import { useCsssDialog } from "csss-ui";
export const defineDialogLayout = () => ({
  ...useCsssDialog({
    style: {
      classList: {
        dialog: ["", "router-view-dialog"],
      },
    },
  }),
});
