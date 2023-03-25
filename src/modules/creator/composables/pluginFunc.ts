import { injectLoading } from "@/composables/plus/loading";
import { move } from "@/composables/util/move";
import type { Ref } from "vue";
import { inject } from "vue";

export const usePluginFunc = () => {
  const loading = injectLoading();
  const creator = inject<Ref<Creator>>("creator");

  const deletePlugin = (index: number) => {
    loading.value = true;
    creator?.value.plugins.splice(index, 1);
    loading.value = false;
  };
  const upPlugin = (index: number) => {
    if (!index) return;
    loading.value = true;
    move(creator?.value.plugins!, index, index - 1);
    loading.value = false;
  };
  const downPlugin = (index: number) => {
    if (index === creator?.value.plugins.length) return;
    loading.value = true;
    move(creator?.value.plugins!, index, index + 1);
    loading.value = false;
  };

  return [deletePlugin, upPlugin, downPlugin];
};
