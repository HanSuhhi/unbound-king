type Options = {
  range?: string[];
  titleRange?: string[];
};

type AutoformItem = {
  key: string;
  title: string;
  type: "input" | "selecter";
  required?: boolean;
  options?: Options;
  placeholder?: string;
  default?: string;
  disabled?: boolean;
  limit?: {
    max?: number;
  };
  rules?: import("element-plus").FormItemRule[];
};
