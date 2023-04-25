import { find } from "lodash-es";
import type { Ref } from "vue";
import { computed, provide, ref } from "vue";

import { DATA_PackageNames } from "@/modules/packageName/data/packageName.data";

type ReturnRecord<T> = Record<string, TabListItem<T>>;

function useTabsStruct<T = any >(data: Dictionary<T>) {
  const returnRecord: ReturnRecord<T> = {
    standard: {
      icon: "package",
      index: 0,
      key: "standard",
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      injectData: data.standard.default,
      name: DATA_PackageNames.standard
    }
  };

  const keys = Object.keys(DATA_PackageNames);

  const index = keys.indexOf("standard");
  if (index !== -1) keys.splice(index, 1);

  keys.forEach((key, index) => {
    if (!data[key]) return;

    returnRecord[key] = {
      icon: "package",
      name: DATA_PackageNames[key],
      key,
      index: -1
    };
    returnRecord[key].index = index + 1;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    returnRecord[key].injectData = data[key]?.default || [];
  });

  return returnRecord;
}

export function defineTabsData(data: Dictionary<any>, state: Ref<UseCsssTabsProps["state"]>) {
  const list = ref(useTabsStruct(data));
  const activeItem = computed(() => find(list.value, listItem => listItem.index === state?.value?.active));
  const activeItemData = computed(() => activeItem.value?.injectData || []);

  provide("active-item", activeItem);

  return { list, activeItem, activeItemData };
}
