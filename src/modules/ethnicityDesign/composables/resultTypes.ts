import { DATA_Destiny } from "@/modules/destinyDesign/data/destiny.data";
import { ref } from "vue";

export const useResultTypes = () => {
  const DATA_Types = ["一览", ...DATA_Destiny.map((destiny) => destiny.title)];

  return { DATA_Types };
};
