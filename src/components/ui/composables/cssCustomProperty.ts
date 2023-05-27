import { forEach } from "lodash";
import type { Ref } from "vue";
import { unref, watchEffect } from "vue";
import type { StyleSetter } from "../tool/styleSetter.tool";
import { useGenerator } from "./generator";

export function useCssCustomProperty<T extends Record<string, string>>(styleSetter: Ref<StyleSetter | undefined>) {
  const { generator } = useGenerator<T>({} as T);

  watchEffect(() => {
    forEach(generator.value!, (value, key) => {
      if (value) unref(styleSetter)?.setString(value, key);
    });
  });

  return { property: generator };
}
