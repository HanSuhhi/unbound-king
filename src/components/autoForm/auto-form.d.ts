type Options = {
  range?: Translator[];
};

type Autoform = AutoformItem[];

type AutoformItem = {
  key: string;
  title: string;
  type: "text" | "selecter" | "translator" | "icon" | "number" | "textarea" | "none";
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
  rules?: import("naive-ui").FormItemRule[];
};

