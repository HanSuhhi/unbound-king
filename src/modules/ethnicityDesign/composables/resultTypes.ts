import { DATA_Destiny } from "@/modules/destinyDesign/data/destiny.data";

export function useResultTypes() {
  const DATA_Types = ["一览", ...DATA_Destiny.map(destiny => destiny.title)];

  return { DATA_Types };
}
