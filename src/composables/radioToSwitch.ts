import { useCsssRadio } from "csss-ui";
import { computed } from "vue";

export const useRadioToSwitch = (props?: UseCsssRadioProps) => {
  const { COMP, state: _state } = useCsssRadio({});
  const state = computed({
    set: (value) => (_state.value!.active = value ? 1 : 0),
    get: () => (_state.value?.active ? true : false),
  });

  return { COMP, state };
};
