import { merge } from "lodash-es";

function selecterDefault(configItem: AutoformItem): AutoformItem {
  const isSelect = configItem.type === "selecter";
  const needDefault = isSelect && configItem.required;
  if (isSelect && !configItem.options) configItem.options = { range: [] };

  if (needDefault) configItem.defaultValue = configItem.options?.range![0][0];
  return configItem;
}

function setRules(configItem: AutoformItem): AutoformItem {
  const excludedItems: Array<AutoformItem["type"]> = ["translator", "color", "switch"];

  if (!configItem.rules) configItem.rules = [];
  if (configItem.required && !excludedItems.includes(configItem.type)) configItem.rules.push({ required: true, message: `${configItem.title}项不可为空`, trigger: ["blur"] });
  return configItem;
}

function setPlaceholder(configItem: AutoformItem): AutoformItem {
  configItem.placeholder = configItem.placeholder || `有关于${configItem.title}的内容...`;
  return configItem;
}

export function withFormDetail<T>(config: AutoformItem[], details: Record<keyof T, Partial<AutoformItem>>): AutoformItem[] {
  return config.map((configItem) => {
    const detail = details[configItem.key as keyof T];
    selecterDefault(configItem);
    merge(configItem, detail);
    setRules(configItem);
    setPlaceholder(configItem);
    return configItem;
  });
}
