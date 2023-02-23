import { useCsssButton } from "csss-ui";

const createDialogOperator = () =>
  useCsssButton({
    style: {
      classList: {
        button: ["", "dialog-operator"],
      },
      property: {
        "--padding-x": "var(--normal)",
        "--padding-y": "var(--small)",
      },
    },
  });

export const useDialogOperations = () => {
  const { COMP: CancelButton } = createDialogOperator();
  const { COMP: ConfirmButton } = createDialogOperator();

  return { CancelButton, ConfirmButton };
};
