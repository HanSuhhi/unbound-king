type PluginStruct = {
  translator: Translator;
  description?: string;
  generator: string;
  generatorForm: Autoform;
  generatorParams: GeneratorProp;
  pastData?: any;
};

type CreatorPlugin = {
  translator: Translator;
  belong: "_" | "character";
  description: string;
  icon: BaseIconName;
  data: PluginStruct[];
};
