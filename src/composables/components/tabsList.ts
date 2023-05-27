import { find } from "lodash";
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
      // TODO
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      injectData: (data.standard as any).default,
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
    // TODO
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    returnRecord[key].injectData = (data[key] as any)?.default || [];
  });

  return returnRecord;
}

export function defineTabsData(data: Dictionary<any>, state: Ref<UseCsssTabsProps["state"]>) {
  const list = ref(useTabsStruct(data));
  const activeItem = computed(() => find(list.value, listItem => listItem.index === state?.value?.active));
  // TODO
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const activeItemData = computed(() => activeItem.value?.injectData || []);

  provide("active-item", activeItem);

  return { list, activeItem, activeItemData };
}
