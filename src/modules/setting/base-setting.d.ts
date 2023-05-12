type BaseSettingRule = {
  translator: Translator;
  description: string;
}

type BaseSettingItem = {
  translator: Translator;
  children?: BaseSetting;
  rules?: BaseSettingRule[];
}

type BaseSetting = BaseSettingItem[]

type AnchorArray = [firstTitle: string, secondTitles?: string[]][]