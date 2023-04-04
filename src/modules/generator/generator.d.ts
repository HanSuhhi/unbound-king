type ReturnStruct<T = string> = [title: string, value: string | Translator, key: T];

type GeneratorFunc<T, E> = (generatedData: ReturnStruct[], params?: E, plugin: PluginStruct) => T;

type GeneratorProp<T> = {
  needInject?: string[];
} & T