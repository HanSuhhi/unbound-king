import { inject } from "vue";
import type { ProvideProps } from "../plus/provide";
import { useProvide } from "../plus/provide";

const ModalSymbol = Symbol("modal");

export function defineCommonDialog() {
  const modalShow = useProvide(ModalSymbol, false);

  return { ...modalShow };
}

export function getCommonDialog() {
  const modal = inject<ProvideProps<boolean>>(ModalSymbol)!;
  return { modal: modal.value, updateModal: modal.update };
}
