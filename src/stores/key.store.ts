import { useMagicKeys } from "@vueuse/core";
import { defineStore } from "pinia";
import type { WatchStopHandle } from "vue";
import { ref, watch, computed, onUnmounted } from "vue";
import { findIndex, forEach, toArray } from "lodash-es";

let commandStagingStore: Record<string, KeyCommand> = {};
const clearCommandStagingStore = () => (commandStagingStore = {});

let commandsStore: Record<string, KeyCommand> = {};
const clearCommandStore = () => (commandsStore = {});

let runningKeyCammands: Record<string, WatchStopHandle> = {};
const stopRunningKeyCommand = (key: string) => {
  runningKeyCammands[key]();
  delete runningKeyCammands[key];
};
const stopRunningAllKeyCommands = () => {
  forEach(runningKeyCammands, (stopRunningKeyCammand) => stopRunningKeyCammand());
  runningKeyCammands = {};
};

const useKeyStore = defineStore("key", () => {
  const KEYS = useMagicKeys();
  const keys = computed(() => Array.from(KEYS.current));

  function defineCommandKey(key: string) {
    return key[0] === "_" ? keys : KEYS[key];
  }

  const addKeyCommand = (newKeyCommand: KeyCommand) => {
    commandsStore[newKeyCommand.key] = newKeyCommand;
    runningKeyCammands[newKeyCommand.key] = watch(defineCommandKey(newKeyCommand.key), newKeyCommand.fn.bind(this));
  };

  const addKeyCommands = (newKeyCommands: KeyCommand[]) => {
    forEach(newKeyCommands, (newKeyCommand) => addKeyCommand(newKeyCommand));
  };

  const uninstallKeyCommand = (key: string) => {
    delete commandsStore[key];
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
        commandStagingStore = commandsStore;
        clearKeyCommands();
      } else {
        addKeyCommands(toArray(commandStagingStore));
        clearCommandStagingStore();
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
    freeze,
  };
});

export { useKeyStore };
