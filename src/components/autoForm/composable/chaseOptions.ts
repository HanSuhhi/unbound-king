import { map } from "lodash-es";
import type { SelectOption } from "naive-ui";
import { DATA } from "../../../composables/data";

export function transformChaseOptions(): SelectOption[] {
  const options = map(DATA.DATA_Chases, chase => ({
    label: chase.translator[1],
    value: chase.translator[0],
    icon: chase.icon
  }));
  return options;
}
