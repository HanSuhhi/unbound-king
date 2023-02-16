import { ref } from "vue";

export const useFunctions = () => {
  const funcs = ref<ModulePage[]>([
    {
      icon: "i-fontisto-bell",
    },
  ]);

  return { funcs };
};
