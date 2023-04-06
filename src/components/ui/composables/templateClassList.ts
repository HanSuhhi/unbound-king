import { union } from "lodash-es";
import { computed, ref } from "vue";

type Classes = string[];

export const useTemplateClassList = (defaultClasses?: Classes, fixed?: Classes) => {
  // private
  const fixedClasses = ref<Classes>(fixed || []);
  const baseClasses = ref<Classes>(defaultClasses || []);
  const extraClasses = ref<Classes>([]);

  // public
  const classList = computed({
    get: () => union(baseClasses.value, extraClasses.value, fixedClasses.value),
    set: (_extraClasses) => {
      const firstName = _extraClasses[0];
      const needBaseClass = Boolean(firstName);
      // default class
      if (!needBaseClass) {
        if (_extraClasses.length === 0) console.warn("it should not give an empty class list");
        baseClasses.value = defaultClasses || [];
        extraClasses.value = _extraClasses.splice(_extraClasses.length - 1);
      } else {
        baseClasses.value = [];
        // if extra class name is "_", means don't add plus name
        if (firstName === "_" && _extraClasses.length === 1) extraClasses.value = [];
        else extraClasses.value = _extraClasses;
      }
    },
  });

  return { classList };
};
