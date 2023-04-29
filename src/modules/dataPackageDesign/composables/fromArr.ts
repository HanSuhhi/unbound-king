import { DATA_PackageNames } from "@/modules/packageName/data/packageName.data";

export function getFromArrFromData(data: Map<string, { from: From }>) {
  const set = new Set<string>();
  const arr = [...data.values()];
  for (let i = arr.length - 1; i >= 0; i--) set.add(arr[i].from);

  return Array.from(set).map(fromItem => ({
    label: DATA_PackageNames[fromItem],
    value: fromItem
  }));
}
