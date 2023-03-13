type PluginChild = {
  id: string;
  name: Translator;
  generator?: string;
  generatorForm?: Autoform;
  generatorParams?: Parameters<GeneratorFunc>;
};

type CreatorPlugin = {
  name: Translator;
  belong: "character";
  data: PluginChild[] | PluginChild;
};
