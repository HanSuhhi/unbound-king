import { provide, ref } from "vue";

export function defineCommonDialog() {
  const modalShow = ref(false);
  provide("modal", modalShow);

  return { modalShow };
}
