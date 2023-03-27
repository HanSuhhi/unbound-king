import { ref } from 'vue';
import { DATA_Creators } from '../data/index';
import { usePluginTest } from './pluginTest';

export const genCreatorData = (key: CreatorKey) => {
  const creator = DATA_Creators[key];

  const _data = ref<Record<string, ReturnType<typeof usePluginTest>>>({});

  creator.plugins.forEach((plugin) => {
    const pluginData = usePluginTest(plugin, _data);
    _data.value[plugin.translator.key] = pluginData;
  });

  return _data.value;
};
