import { forEach, isUndefined } from "lodash-es";
import { ref, watch } from "vue";

export const defineAutoFormModel = (props: any) => {
  function init() {
    const model = props.config.reduce((values: any, { key, defaultValue, type }: any) => {
      if (props.params) {
        return {
          ...values,
          [key]: props.params[key],
        };
      }

      if (key === "translator") {
        const defaultTranslator: Translator = defaultValue || [];

        return {
          ...values,
          [key]: defaultTranslator,
        };
      }
      if (type === "number") {
        return {
          ...values,
          [key]: defaultValue || 0,
        };
      }
      return { ...values, [key]: defaultValue || "" };
    }, {});

    return model;
  }

  const model = ref<Record<string, any>>(init());

  if (!isUndefined(props.params)) {
    watch(
      model,
      (v) => {
        forEach(v, (_, key) => {
          props.params[key] = _;
        });
      },
      { deep: true },
    );
  }

  return { model, init };
};
