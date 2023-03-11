type Options = {
  range?: Translator[];
};

type AutoformItem = {
  key: string;
  title: string;
  type: "input" | "selecter" | "translator" | "game-icon";
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
