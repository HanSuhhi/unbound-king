import { computed, ref } from "vue";

interface GlobalDialog {
  title: string
  type: "info" | "warning" | "danger"
  text: string
  confirm?: () => void
  cancel?: () => void
  _confirm: () => void
  _cancel: () => void
  init?: () => void
  toSelecter?: string
  headerAsBody?: boolean
  needBg?: boolean
}

const _dialogMessage = ref<GlobalDialog>();
export const dialogMessage = computed({
  get: () => _dialogMessage.value,
  set: (state) => {
    _dialogMessage.value = state;
  }
});

type MessageReceiveProp = Omit<GlobalDialog, "type" | "_confirm" | "_cancel">;

export function useGlobalDialog(): Record<GlobalDialog["type"], (message: MessageReceiveProp) => void> {
  const dialog = (type: GlobalDialog["type"]) => (message: MessageReceiveProp) => {
    if (message.init) message.init();
    dialogMessage.value = {
      ...message,
      needBg: true,
      type,
      _cancel() {
        message?.cancel?.();
        dialogMessage.value = undefined;
      },
      _confirm() {
        message?.confirm?.();
        dialogMessage.value = undefined;
      }
    };
  };

  return {
    warning: dialog("warning"),
    info: dialog("info"),
    danger: dialog("danger")
  };
}
