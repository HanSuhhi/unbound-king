import { ref } from 'vue';

type GlobalDialog = {
  title: string;
  type: "info" | "warning" | "danger",
  text: string;
  confirm?: () => void;
  cancel?: () => void;
  _confirm: () => void;
  _cancel: () => void;
}

export const dialogMessage = ref<GlobalDialog>();

type MessageReceiveProp = Omit<GlobalDialog, "type" | "_confirm" | "_cancel">

export const useGlobalDialog = (): Record<GlobalDialog['type'], (message: MessageReceiveProp) => void> => {
  const dialog = (type: GlobalDialog['type']) => (message: MessageReceiveProp) => {
    dialogMessage.value = {
      ...message,
      type,
      _cancel() {
        message?.cancel?.();
        dialogMessage.value = undefined;
      },
      _confirm() {
        message?.confirm?.();
        dialogMessage.value = undefined;
      },
    };
  };

  return {
    warning: dialog("warning"),
    info: dialog("info"),
    danger: dialog("danger"),
  };
};
