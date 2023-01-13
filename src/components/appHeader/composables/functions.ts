import { ref } from "vue";

export const useFunctions = () => {
  const funcs = ref<ModuleList[]>([
    {
      icon: "i-fontisto-bell",
    },
  ]);

  return { funcs };
};
