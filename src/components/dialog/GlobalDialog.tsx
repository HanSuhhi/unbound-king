import "./global-dialog.css";

import { useGlobalDialogStore } from "@/components/dialog/store/dialog.store";
import { storeToRefs } from "pinia";
import { defineComponent, onMounted } from "vue";
import KeyboardButton from "../KeyboardButton";
import { useGlobalDialog } from "./composables/globalDialog";
import { useDialogLayout } from "./composables/layout";
import { useDialogOperations } from "./composables/operators";

export default defineComponent({
  name: "GlobalDialog",
  setup: (props) => {
    const { close, enter } = useGlobalDialog();
    const { COMP, dialogContent } = storeToRefs(useGlobalDialogStore());
    const { Layout } = useDialogLayout();
    const { CancelButton, ConfirmButton } = useDialogOperations();

    return () => {
      return (
        <c-dialog ref={COMP}>
          <c-layout ref={Layout}>
            {{
              footer: () => (
                <section class="dialog-opertors">
                  <c-button ref={CancelButton} onClick={close}>
                    <KeyboardButton text="esc">取消</KeyboardButton>
                  </c-button>
                  <c-button ref={ConfirmButton} onClick={enter}>
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
