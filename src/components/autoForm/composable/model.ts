/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { forEach, isUndefined } from "lodash-es";
import { ref, watch } from "vue";

export function defineAutoFormModel(props: { config: AutoformItem[]; params?: AutoformItem }) {
  function init() {
    const model = props.config.reduce((values, { key, defaultValue, type }) => {
      if (props.params) {
        return {
          ...values,
          [key]: (props.params)[key]
        };
      }

      switch (type) {
        case "number":
          return { ...values, [key]: defaultValue || 0 };
        case "color":
          return { ...values, [key]: defaultValue || ["#000", "#000"] };
        case "minmax":
        case "translator":
          return { ...values, [key]: defaultValue || [] };
        default:
          return { ...values, [key]: defaultValue || "" };
      }
    }, {});

    return model;
  }

  const model = ref<Record<string, any>>(init());

  if (!isUndefined(props.params)) {
    watch(
      model,
      (v) => {
        forEach(v, (_, key) => props.params[key] = _);
      },
      { deep: true }
    );
  }

  return { model };
}
