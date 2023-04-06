import { provide, ref } from 'vue';

export const defineCommonDialog = () => {
  const modalShow = ref(false);
  provide("modal", modalShow);

  return { modalShow };
};
