import { useCsssDialog } from "csss-ui";
import { provide } from "vue";

export const defineCommonDialog = (name: string) => {
  const { COMP, state } = useCsssDialog({
    state: { toBox: `.${name}` },
    style: { classList: { dialog: ["", "router-view-dialog"] } },
  });

  provide("dialog", state);
  provide("Dialog", COMP);

  const openDialog = () => {
    state!.value.show = true;
  };

  return { COMP, state, openDialog };
};
