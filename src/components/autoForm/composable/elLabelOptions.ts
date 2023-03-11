import { transform } from "lodash-es";
import { GlobalEnum } from "../../../enums/global.enum";

type OptionReturn = {
  label: string;
  options: Record<string, GameIcon>;
};

export function transformIconToElLabelOptions(gameicons: Record<string, GameIcon>) {
  return transform(
    gameicons,
    (result: OptionReturn[], value, key) => {
      result.push({
        label: GlobalEnum[value.from] || value.from,
        options: {
          [key]: value,
        },
      });
    },
    [],
  );
}
