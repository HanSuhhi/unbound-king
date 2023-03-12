import data from "@/modules/gameIcon/data/standard.data";
import { groupBy, identity, keyBy, map, mapValues, transform } from "lodash-es";
import { GlobalEnum } from "../../../enums/global.enum";

type OptionReturn = {
  label: string;
  options: Record<string, GameIcon>;
};

export function transformIconToElLabelOptions(gameicons: Record<string, GameIcon>): OptionReturn[] {
  const grouped = groupBy(gameicons, "from");

  const transformed = mapValues(grouped, (group) => {
    const options = group.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});
    return { label: group[0].from, options };
  });

  return Object.values(transformed);
}
