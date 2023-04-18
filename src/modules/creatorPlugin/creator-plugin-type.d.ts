type PluginStruct = {
  translator: Translator;
  description?: string;
  generator: string;
  generatorForm: Autoform;
  generatorParams: GeneratorProp;
  pastData?: T;
};

type CreatorPlugin = {
  translator: Translator;
  belong: "_" | "character";
  description: string;
  icon: BaseIconName;
  data: PluginStruct[];
};
