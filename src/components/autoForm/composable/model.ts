/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { forEach, isUndefined } from "lodash-es";
import { ref, watch } from "vue";
import { deep } from "../../../composables/plus/watch";

export function defineAutoFormModel(props: { config: AutoformItem[]; params?: AutoformItem }) {
  function init() {
    const model = props.config.reduce((values, { key, defaultValue, type }) => {
      if (props.params) {
        return {
          ...values,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          [key]: (props.params as any)[key]
        };
      }

      const typeMap: Partial <Record<AutoformItem["type"], any>> = {
        number: 0,
        switch: false,
        color: ["#000", "#000"],
        minmax: [],
        translator: []
      };

      return { ...values, [key]: defaultValue || typeMap[type] || "" };
    }, {});

    return model;
  }

  const model = ref<Record<string, any>>(init());

  if (!isUndefined(props.params)) {
    watch(
      model,
      (v) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        forEach(v, (_, key) => (props.params as any)[key] = _);
      },
      deep
    );
  }

  return { model };
}
