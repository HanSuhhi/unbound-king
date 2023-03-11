import { map, groupBy, values, transform } from "lodash-es";

type OptionReturn = {
  label: string;
  options: Record<string, GameIcon>;
};

export function transformIconToElLabelOptions(gameicons: Record<string, GameIcon>) {
  return transform(
    gameicons,
    (result: OptionReturn[], value, key) => {
      result.push({
        label: value.from,
        options: {
          [key]: value,
        },
      });
    },
    [],
  );
}
