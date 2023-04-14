import { find } from "lodash-es";
import type { Ref } from "vue";
import { computed, provide, ref } from "vue";

import { getGlobalEnumNameOrNot } from "../../enums/global.enum";

type ReturnRecord<T> = Record<string, TabListItem<T>>;

function useTabsStruct<T>(data: Record<string, T>, translator: ReturnRecord<T> = {}) {
  const returnRecord: ReturnRecord<T> = {
    standard: {
      icon: "package",
      index: 0,
      key: "standard",
      injectData: data.standard.default,
      name: getGlobalEnumNameOrNot("standard")
    }
  };

  const keys = Object.keys(data);

  const index = keys.indexOf("standard");
  if (index !== -1) keys.splice(index, 1);

  keys.forEach((key, index) => {
    if (translator[key]) { returnRecord[key] = translator[key]; }
    else {
      returnRecord[key] = {
        name: getGlobalEnumNameOrNot(key),
        key,
        index: -1
      };
    }
    returnRecord[key].index = index + 1;
    returnRecord[key].injectData = data[key].default;
  });

  return returnRecord;
}

export function defineTabsData<T>(data: Record<string, T>, state: Ref<UseCsssTabsProps["state"]>, translator: ReturnRecord<T> = {}) {
  const returnRecord = useTabsStruct<T>(data, translator);

  const list = ref(returnRecord);
  const activeItem = computed(() => find(list.value, listItem => listItem.index === state.value?.active));
  const activeItemData = computed(() => activeItem.value?.injectData);

  provide("active-item", activeItem);

  return { list, activeItem, activeItemData };
}
