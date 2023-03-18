import { defineTranslatorValidator } from "./TranslatorValidator";

export const idFormConfig = {
  id: {
    title: "id",
    disabled: true,
    defaultValue: "自动生成，无需操作",
  } as Partial<AutoformItem>,
};

export const translatorFormConfig = {
  translator: {
    title: "名称",
    rules: [
      {
        validator: defineTranslatorValidator(),
        trigger: "blur",
      },
    ],
  } as Partial<AutoformItem>,
};
