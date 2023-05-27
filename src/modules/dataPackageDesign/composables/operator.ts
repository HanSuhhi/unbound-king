import type { Ref } from "vue";
import { inject, ref, watch } from "vue";
import { forEach, keys } from "lodash";
import { choosedPackageSymbol } from "../data-package.symbol";
import { deep } from "../../../composables/plus/watch";
import { ternaryIsFalse, ternaryIsIndeterminate } from "../../../composables/util/ternary";
import { cryptoData } from "./cryptoData";
import { getFromArrFromData } from "./fromArr";
import { whenItsFalse, whenItsTrue } from "@/composables/plus/watch";
import { isObjectComplete } from "@/composables/util/object";
import { ternaryIsTrue } from "@/composables/util/ternary";

type CheckboxState = [checked: Ref<boolean>, indeterminate: Ref<boolean>];

function useCheckAll(choosedPackages: Ref<Record<string, From[]>>) {
  const all: CheckboxState = [ref(false), ref(true)];
  const [checked, indeterminated] = all;

  /**
   * Select all encrypted data
   *
   * @param {Dictionary<CryptoData>} cryptoData encrypted data
   * @param {string} packageName encrypted key
   *
   * @returns {void}
   */
  const chooseAll = () => {
    forEach(cryptoData, ({ data }, packageName) => {
      const fromArr = getFromArrFromData(data);
      choosedPackages.value[packageName] = fromArr.map(({ value }) => value);
    });
  };

  /**
   * clear all crypto data
   *
   * @function clearAll
   *
   * @returns {void}
   */
  const clearAll = () => {
    keys(choosedPackages.value).forEach((key) => {
      choosedPackages.value[key] = [];
    });
  };

  watch(checked, (v) => {
    whenItsTrue(chooseAll)(v);
    whenItsFalse(clearAll)(v);
  });

  watch(choosedPackages, (newPackages) => {
    const checkAllTemplate: Record<string, From[]> = {};
    forEach(cryptoData, ({ data }, packageName) => checkAllTemplate[packageName] = getFromArrFromData(data).map(({ value }) => value));

    const state = isObjectComplete(newPackages)(checkAllTemplate);
    ternaryIsTrue(state)(() => {
      checked.value = true;
      indeterminated.value = false;
    });
    ternaryIsFalse(state)(() => {
      checked.value = false;
      indeterminated.value = false;
    });
    ternaryIsIndeterminate(state)(() => {
      indeterminated.value = true;
    });
  }, deep);

  return all;
}

export function useOperatorCheckboxes() {
  const choosedPackages = inject<Ref<Record<string, From[]>>>(choosedPackageSymbol)!;

  const all = useCheckAll(choosedPackages);

  return { all };
}
