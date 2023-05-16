import { useMagicKeys } from "@vueuse/core";
import { forEach, isArray, toArray } from "lodash-es";
import { defineStore } from "pinia";
import type { WatchStopHandle } from "vue";
import { computed, ref, watch } from "vue";

const commandStagingStore = ref<Dictionary<KeyEvent>>({});
function clearCommandStagingStore() {
  return commandStagingStore.value = {};
}

const commandsStore = ref<Dictionary<KeyEvent>>({});
function clearCommandStore() {
  return commandsStore.value = {};
}

const runningKeyCammands = ref<Dictionary<WatchStopHandle>>({});

function stopRunningKeyCommand(key: string) {
  if (!runningKeyCammands.value[key]) return;
  runningKeyCammands.value[key]();
  delete runningKeyCammands.value[key];
}
function stopRunningAllKeyCommands() {
  forEach(runningKeyCammands.value, stopRunningKeyCammand => stopRunningKeyCammand());
  runningKeyCammands.value = {};
}

const useKeyStore = defineStore("key", () => {
  const KEYS = useMagicKeys();
  const keys = computed(() => Array.from(KEYS.current));

  function defineCommandKey(key: string | string[]) {
    return isArray(key) ? keys : KEYS[key];
  }

  const addKeyCommand = (newKeyCommand: KeyEvent): KeyEvent => {
    const key = `${newKeyCommand.key}_${newKeyCommand.translator[0]}`;
    commandsStore.value[key] = newKeyCommand;
    runningKeyCammands.value[key] = watch(defineCommandKey(newKeyCommand.key), newKeyCommand.fn.bind(this));
    return newKeyCommand;
  };

  const addKeyCommands = (newKeyCommands: KeyEvent[]): KeyEvent[] => {
    forEach(newKeyCommands, newKeyCommand => addKeyCommand(newKeyCommand));
    return newKeyCommands;
  };

  const uninstallKeyCommand = (key: string | KeyEvent) => {
    if (typeof key !== "string") key = `${key.key}_${key.translator[0]}`;
    delete commandsStore.value[key];
    stopRunningKeyCommand(key);
  };

  const uninstallKeyCommands = (keys: string[]) => {
    forEach(keys, key => uninstallKeyCommand(key));
  };

  const clearKeyCommands = () => {
    clearCommandStore();
    stopRunningAllKeyCommands();
  };

  const _freeze = ref(false);
  const freeze = computed({
    get: () => _freeze.value,
    set(needFreeze) {
      if (needFreeze) {
        commandStagingStore.value = commandsStore.value;
        clearKeyCommands();
        _freeze.value = true;
      }
      else {
        clearKeyCommands();
        addKeyCommands(toArray(commandStagingStore.value));
        clearCommandStagingStore();
        _freeze.value = false;
      }
    }
  });

  return {
    addKeyCommand,
    addKeyCommands,
    uninstallKeyCommand,
    uninstallKeyCommands,
    freeze,
    commandStagingStore,
    commandsStore,
    runningKeyCammands
  };
});

export { useKeyStore };
