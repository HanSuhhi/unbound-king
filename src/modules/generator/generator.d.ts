type ReturnStruct<T = string> = [title: string, value: string | Translator, key: T];

type GeneratorFunc<T, U> = (generatedData: ReturnStruct[], params: U, plugin: PluginStruct) => T;

type GeneratorProp<T> = {
  needInject?: string[];
} & T