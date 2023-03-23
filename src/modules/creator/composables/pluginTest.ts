import { DATA_Generators } from "@/modules/generator/data";
import { forEach } from "lodash-es";
import { ref } from "vue";

export const usePluginTest = (plugins: PluginStruct[]) => {
  const data = ref<ReturnStruct[]>([]);

  const genData = () => {
    const _data: ReturnStruct[] = [];
    forEach(plugins, (plugin: PluginStruct) => {
      const title = `${plugin.translator.title} - ${plugin.translator.key}`;
      const value = DATA_Generators[plugin.generator](plugin.generatorParams, _data).toString();
      _data.push([title, value, plugin.translator.key]);
    });
    data.value = _data;
  };
  genData();

  return { data, genData };
};
