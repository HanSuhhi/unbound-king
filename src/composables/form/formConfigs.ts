import type { ComputedRef } from "vue";
import { inject } from "vue";
import data from "../../modules/destinyDesign/data/destiny.data";
import { defineTranslatorValidator } from "./TranslatorValidator";

export const idFormConfig = {
  id: {
    title: "id",
    disabled: true,
    defaultValue: "自动生成，无需操作"
  } as Partial<AutoformItem>
};

export const translatorFormConfig = {
  translator: {
    title: "名称",
    rules: [
      {
        validator: defineTranslatorValidator(),
        trigger: ["blur"]
      }
    ]
  } as Partial<AutoformItem>
};

export const iconFormConfig = {
  icon: {
    title: "图标"
  } as Partial<AutoformItem>
};

export const descriptionFormConfig = {
  description: {
    title: "说明"
  } as Partial<AutoformItem>
};

export const colorFormConfig = {
  color: {
    title: "颜色",
    rules: [
      {
        validator: defineTranslatorValidator(),
        trigger: ["blur"]
      }
    ]
  } as Partial<AutoformItem>
};

export const destinyFormConfig = {
  destiny: {
    title: "种族",
    type: "selecter",
    defaultValue: data[0].translator[0],
    options: {
      range: data.map(destiny => destiny.translator)
    }

  } as Partial<AutoformItem>
};

export function fromFormConfig() {
  const item = inject<ComputedRef<TabListItem<GameIcon>>>("active-item");
  return {
    from: {
      title: "来源",
      defaultValue: item?.value.name,
      disabled: true
    }
  };
}

export const hideFormConfig = { hide: true };
