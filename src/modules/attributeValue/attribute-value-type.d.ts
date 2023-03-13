type AttributeValue = {
  id: string;
  translator: Translator;
  description: string;
  icon: Icon;
  dataType: "number" | "boolean";
  type: "base" | "advanced" | "special";
};
