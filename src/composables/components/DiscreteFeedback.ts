import { useDark } from "@vueuse/core";
import type { ConfigProviderProps } from "naive-ui";
import { createDiscreteApi, darkTheme, lightTheme } from "naive-ui";
import type { DiscreteApiType } from "naive-ui/es/discrete/src/interface";
import { computed } from "vue";

export function useDiscreteFeedback<T extends DiscreteApiType>(required: T[]) {
  const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
    theme: useDark().value ? darkTheme : lightTheme
  }));

  return createDiscreteApi(
    required,
    { configProviderProps: configProviderPropsRef }
  );
}
