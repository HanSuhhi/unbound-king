import "./global-dialog.css";

import { useGlobalDialogStore } from "@/stores/dialog.store";
import { storeToRefs } from "pinia";
import { defineComponent, onMounted } from "vue";
import KeyboardButton from "../KeyboardButton";
import { useGlobalDialog } from "./composables/globalDialog";
import { useDialogLayout } from "./composables/layout";
import { useDialogOperations } from "./composables/operators";

export default defineComponent({
  name: "GlobalDialog",
  setup: (props) => {
    const { closeDialog, closeWindow } = useGlobalDialog();
    const { COMP, dialogContent } = storeToRefs(useGlobalDialogStore());
    const { Layout } = useDialogLayout();
    onMounted(() => {
      console.log("Layout: ", Layout);
    });
    const { CancelButton, ConfirmButton } = useDialogOperations();

    return () => {
      return (
        <c-dialog ref={COMP}>
          <c-layout ref={Layout}>
            {{
              footer: () => (
                <section class="dialog-opertors">
                  <c-button ref={CancelButton} onClick={closeDialog}>
                    <KeyboardButton text="esc">取消</KeyboardButton>
                  </c-button>
                  <c-button ref={ConfirmButton} onClick={closeWindow}>
                    <KeyboardButton text="enter">确认</KeyboardButton>
                  </c-button>
                </section>
              ),
              default: () => <>{dialogContent.value}</>,
            }}
          </c-layout>
        </c-dialog>
      );
    };
  },
});
