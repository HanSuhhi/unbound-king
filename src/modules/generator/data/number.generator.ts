import { random } from "lodash-es";
import type from "../types/number.generator.d.ts?raw";
import { withFormDetail } from "../../../composables/form/formDetail";
import { transformTypeToForm } from "@/composables/form/typeToForm";

const numberGenerator: GeneratorFunc<number, NumberGeneratorProps> = (_, { min, max } = { min: 0, max: 0 }) => {
  return random(min!, max!);
};

const numberGeneratorFormConfig: Autoform = withFormDetail<NumberGeneratorProps>(transformTypeToForm(type), {
  min: {
    title: "最小值",
    type: "number",
    limit: {
      min: 0
    }
  },
  max: {
    title: "最大值",
    type: "number",
    limit: {
      min: 0
    }
  }
});

const numberGeneratorParams: NumberGeneratorProps = {
  min: 0,
  max: 0
};

export const generator = { number: numberGenerator };
export const generatorForm = { number: numberGeneratorFormConfig };
export const generatorParams = { number: numberGeneratorParams };
