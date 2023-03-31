import { DATA_Generators } from "@/modules/generator/data";
import { forEach } from "lodash-es";
import { ref, watch } from "vue";
import { getDataByKey } from '../../../composables/data';

export function usePluginTest(plugin: CreatorPlugin, pastData: any) {
  const data = ref<ReturnStruct[]>([]);

  const genData = () => {
    const _data: ReturnStruct[] = [];
    forEach(plugin?.data, (plugin: PluginStruct) => {
      const title = `${plugin.translator.title} - ${plugin.translator.key}`;
      // inject data
      if (plugin?.generatorParams?.needInject) {
        forEach(plugin.generatorParams.needInject, (injectName: string) => {
          const { data }: { data: ReturnStruct[] } = pastData.value[injectName];
          Object.defineProperty(plugin, 'pastData', {
            value: {},
            writable: true,
            enumerable: true,
          });
          forEach(data, (_data: ReturnStruct) => {
            plugin['pastData'][_data[2]] = _data[1];
          });
        });
      }
      const value = DATA_Generators[plugin.generator](_data, plugin.generatorParams, plugin);

      _data.push([title, value, plugin.translator.key]);
    });
    data.value = _data;
  };
  watch(() => plugin, genData, { immediate: true });

  return { data, genData };
}
