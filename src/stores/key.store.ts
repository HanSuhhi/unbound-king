import { useMagicKeys } from "@vueuse/core";
import { defineStore } from "pinia";
import type { WatchStopHandle } from "vue";
import { ref, watch, computed, onUnmounted } from "vue";
import { findIndex, forEach, toArray } from "lodash-es";

const commandStagingStore = ref<Record<string, KeyCommand>>({});
const clearCommandStagingStore = () => (commandStagingStore.value = {});

const commandsStore = ref<Record<string, KeyCommand>>({});
const clearCommandStore = () => (commandsStore.value = {});

const runningKeyCammands = ref<Record<string, WatchStopHandle>>({});

const stopRunningKeyCommand = (key: string) => {
  if (!runningKeyCammands.value[key]) return;
  runningKeyCammands.value[key]();
  delete runningKeyCammands.value[key];
};
const stopRunningAllKeyCommands = () => {
  forEach(runningKeyCammands.value, (stopRunningKeyCammand) => stopRunningKeyCammand());
  runningKeyCammands.value = {};
};

const useKeyStore = defineStore("key", () => {
  const KEYS = useMagicKeys();
  const keys = computed(() => Array.from(KEYS.current));

  function defineCommandKey(key: string) {
    return key[0] === "_" ? keys : KEYS[key];
  }

  const addKeyCommand = (newKeyCommand: KeyCommand) => {
    commandsStore.value[newKeyCommand.key] = newKeyCommand;
    runningKeyCammands.value[newKeyCommand.key] = watch(defineCommandKey(newKeyCommand.key), newKeyCommand.fn.bind(this));
  };

  const addKeyCommands = (newKeyCommands: KeyCommand[]) => {
    forEach(newKeyCommands, (newKeyCommand) => addKeyCommand(newKeyCommand));
  };

  const uninstallKeyCommand = (key: string) => {
    delete commandsStore.value[key];
    stopRunningKeyCommand(key);
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
      } else {
        clearKeyCommands();
        addKeyCommands(toArray(commandStagingStore.value));
        clearCommandStagingStore();
        _freeze.value = false;
      }
    },
  });
  const addAutoKeyCommand = (keyCommand: KeyCommand) => {
    addKeyCommand(keyCommand);
    onUnmounted(uninstallKeyCommand.bind(this, keyCommand.key));
  };
  return {
    addKeyCommand,
    addAutoKeyCommand,
    uninstallKeyCommand,
    freeze,
    commandStagingStore,
    commandsStore,
    runningKeyCammands,
  };
});

export { useKeyStore };
