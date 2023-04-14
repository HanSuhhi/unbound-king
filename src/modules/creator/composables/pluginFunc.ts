import type { Ref } from "vue";
import { inject } from "vue";
import { move } from "@/composables/util/move";

export function usePluginFunc() {
  const creator = inject<Ref<Creator>>("creator")!;

  const deletePlugin = (index: number) => {
    creator?.value.plugins.splice(index, 1);
  };
  const upPlugin = (index: number) => {
    if (!index) return;
    move(creator?.value.plugins, index, index - 1);
  };
  const downPlugin = (index: number) => {
    if (index === creator?.value.plugins.length) return;
    move(creator?.value.plugins, index, index + 1);
  };

  return [deletePlugin, upPlugin, downPlugin];
}
