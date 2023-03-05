import { merge } from "lodash-es";

function selecterDefault(configItem: AutoformItem): AutoformItem {
  const needDefault = configItem.type === "selecter" && configItem.required;
  if (needDefault) configItem.default = configItem.options?.range![0];
  return configItem;
}

function setRules(configItem: AutoformItem): AutoformItem {
  if (!configItem.rules) configItem.rules = [];
  if (configItem.required) configItem.rules.push({ required: true, message: `${configItem.title}项不可为空` });
  return configItem;
}

function setPlaceholder(configItem: AutoformItem): AutoformItem {
  configItem.placeholder = configItem.placeholder || `有关于${configItem.title}的内容...`;
  return configItem;
}

export const withFormDetail = <T>(config: AutoformItem[], details: Record<keyof T, Partial<AutoformItem>>): AutoformItem[] => {
  return config.map((configItem) => {
    const detail = details[configItem.key as keyof T];
    setRules(configItem);
    selecterDefault(configItem);
    merge(configItem, detail);
    setPlaceholder(configItem);
    return configItem;
  });
};
