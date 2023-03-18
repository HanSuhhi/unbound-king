type Options = {
  range?: Translator[];
};

type Autoform = AutoformItem[];

type AutoformItem = {
  key: string;
  title: string;
  type: "input" | "selecter" | "translator" | "icon" | "number";
  hide?: boolean;
  required?: boolean;
  options?: Options;
  placeholder?: string;
  defaultValue?: any;
  disabled?: boolean;
  limit?: {
    max?: number;
    min?: number;
  };
  rules?: import("element-plus").FormItemRule[];
};
