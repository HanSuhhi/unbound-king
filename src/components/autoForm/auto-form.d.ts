type Options = {
  range?: Translator[];
};

type Autoform = AutoformItem[];

type AutoformItem = {
  key: string;
  title: string;
  type: "input" | "selecter" | "translator" | "icon";
  hide?: boolean;
  required?: boolean;
  options?: Options;
  placeholder?: string;
  default?: any;
  disabled?: boolean;
  limit?: {
    max?: number;
  };
  rules?: import("element-plus").FormItemRule[];
};
