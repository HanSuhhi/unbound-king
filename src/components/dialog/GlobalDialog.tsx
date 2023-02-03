import "./global-dialog.css";

import { useGlobalDialogStore } from "@/stores/dialog.store";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import KeyboardButton from "../KeyboardButton";

export default defineComponent({
  name: "GlobalDialog",
  setup: (props) => {
    const { COMP } = storeToRefs(useGlobalDialogStore());
    const { showDialog } = storeToRefs(useGlobalDialogStore());
    return () => {
      return (
        <c-dialog ref={COMP}>
          <c-button color="red">
            <KeyboardButton
              class="setting-footer_error"
              text="q"
              onClick={() => {
                showDialog.value = false;
              }}>
              取消
            </KeyboardButton>
          </c-button>
        </c-dialog>
      );
    };
  },
});
