import { useCsssButton } from "csss-ui";

const createDialogOperator = (mainColor: string = "", subColor: string = "") =>
  useCsssButton({
    style: {
      classList: {
        button: ["", "dialog-operator"],
      },
      property: {
        "--bg-color-main": mainColor,
        "--bg-color-sub": subColor,
        "--padding-x": "var(--normal)",
        "--padding-y": "var(--small)",
      },
    },
  });

export const useDialogOperations = () => {
  const { COMP: CancelButton } = createDialogOperator("var(--gray)", "var(--gray-bright-2)");
  const { COMP: ConfirmButton } = createDialogOperator("var(--main-color-deep-2)", "var(--main-color-bright-2)");

  return { CancelButton, ConfirmButton };
};
