import type { Ref } from "vue";
import { provide, ref, watchEffect } from "vue";
import { isUndefined } from "lodash-es";

interface Product {
  key: string
  value: string
}

function toObject(arr: Product[]) {
  const obj = {};
  arr.forEach(item => Reflect.set(obj, item.key, item.value));
  return obj;
}

function toArray(obj: Dictionary<string>) {
  const arr: Product[] = [];
  for (const key in obj) {
    arr.push({
      key,
      value: obj[key]
    });
  }
  return arr;
}

export function definePackageNameModel(packageNames: Ref<Dictionary<string>>) {
  const dynamicModel = ref(toArray(packageNames.value));
  const changed = ref<boolean>();

  watchEffect(() => {
    packageNames.value = toObject(dynamicModel.value);
    if (isUndefined(changed.value)) changed.value = false;
    else changed.value = true;
  });

  provide("changed", changed);

  return { dynamicModel };
}
