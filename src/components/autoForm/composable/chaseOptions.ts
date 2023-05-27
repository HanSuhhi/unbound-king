import { map } from "lodash";
import type { SelectOption } from "naive-ui";
import { DATA } from "../../../composables/data";

export function transformChaseOptions(): SelectOption[] {
  const options = map(DATA.Chases, chase => ({
    label: chase.translator[1],
    value: chase.translator[0],
    icon: chase.icon
  }));
  return options;
}
