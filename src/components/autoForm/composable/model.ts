import { forEach, isUndefined } from "lodash-es";
import { ref, watch } from "vue";

export function defineAutoFormModel(props: { config: AutoformItem[]; params?: AutoformItem }) {
  function init() {
    const model = props.config.reduce((values, { key, defaultValue, type }) => {
      if (props.params) {
        return {
          ...values,
          [key]: props.params[key]
        };
      }

      if (key === "translator") {
        const defaultTranslator: Translator = defaultValue as Translator || [];

        return {
          ...values,
          [key]: defaultTranslator
        };
      }
      if (type === "number") {
        return {
          ...values,
          [key]: defaultValue as number || 0
        };
      }
      return { ...values, [key]: defaultValue as string || "" };
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
      { deep: true }
    );
  }

  return { model };
}
