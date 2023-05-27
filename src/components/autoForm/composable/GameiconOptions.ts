import { groupBy, mapValues } from "lodash";
import type { SelectGroupOption, SelectOption } from "naive-ui";
import { getGlobalEnumNameOrNot } from "../../../enums/global.enum";
import { defineUniqueId } from "../../../composables/ci/uniqueId";

export function transformIconToElLabelOptions(gameicons: Map<string, GameIcon>): SelectGroupOption[] {
  const grouped = groupBy(Object.fromEntries(gameicons), "from");

  const transformed = mapValues(grouped, (group): SelectGroupOption => {
    const children = group.map((option): SelectOption => ({ ...option, label: option.translator[1], value: option.id }));
    return { label: getGlobalEnumNameOrNot(group[0].from), type: "group", key: defineUniqueId(), children };
  });

  return Object.values(transformed);
}
