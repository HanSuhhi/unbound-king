import { transformTypeToForm } from "@/composables/form/typeToForm";
import { find } from "lodash-es";
import { withFormDetail } from "../../../composables/form/formDetail";
import type from "../types/paste.generator.d.ts?raw";

const pasteGenerator: GeneratorFunc<any, PasteGeneratorProps> = (data, key) => {
  return find(data, (item) => item[2] === key!.pasteFrom)?.[1] || "";
};

const pasteGeneratorFormConfig: Autoform = withFormDetail<PasteGeneratorProps>(transformTypeToForm(type), {
  pasteFrom: {
    title: "数值同步于",
    type: "selecter",
    placeholder: "请选择数据需要同步的属性",
    required: true,
    options: { range: [] },
  },
});

const pasteGeneratorParams: PasteGeneratorProps = {
  pasteFrom: "",
};

export const generator = { paste: pasteGenerator };
export const generatorForm = { paste: pasteGeneratorFormConfig };
export const generatorParams = { paste: pasteGeneratorParams };
