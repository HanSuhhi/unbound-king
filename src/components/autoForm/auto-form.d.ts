type Options = {
  range?: string[];
  titleRange?: string[];
};

type AutoformItem = {
  key: string;
  title: string;
  type: "input" | "selecter" | "translator";
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
