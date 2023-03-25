import { DATA_Generators } from "@/modules/generator/data";
import { forEach } from "lodash-es";
import { ref, watch } from "vue";

export function usePluginTest(plugin: CreatorPlugin) {
  const data = ref<ReturnStruct[]>([]);

  const genData = () => {
    const _data: ReturnStruct[] = [];
    forEach(plugin?.data, (plugin: PluginStruct) => {
      const title = `${plugin.translator.title} - ${plugin.translator.key}`;
      const value = DATA_Generators[plugin.generator](_data, plugin.generatorParams);

      _data.push([title, value, plugin.id]);
    });
    data.value = _data;
  };
  watch(plugin!, genData, { immediate: true });

  return { data, genData };
}
