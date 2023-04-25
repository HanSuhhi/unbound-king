import { ref } from "vue";
import { DATA_Creators } from "../data/index";
import { usePluginTest } from "./pluginTest";

export function genCreatorData(key: CreatorKey) {
  const creator = DATA_Creators[key];

  const _data = ref<Record<string, ReturnType<typeof usePluginTest>>>({});

  creator.plugins.forEach((plugin) => {
    const pluginData = usePluginTest(plugin, _data);
    _data.value[plugin.translator[0]] = pluginData;
  });

  return _data.value;
}
