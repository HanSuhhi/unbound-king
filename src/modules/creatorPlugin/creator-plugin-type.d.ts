type PluginStruct = {
  id: string;
  translator: Translator;
  generator: string;
  generatorForm: Autoform;
  generatorParams: object;
};

type CreatorPlugin = {
  translator: Translator;
  belong: "_" | "character";
  description: string;
  icon: BaseIconName;
  data: PluginStruct[];
};
