import { useMagicKeys } from "@vueuse/core";
import { defineStore } from "pinia";
import type { WatchStopHandle } from "vue";
import { ref, watch, computed } from "vue";
import { forEach } from "lodash-es";
type KeyCommand = {
  /**
   * @description which key to watch
   * @description if begin with "_", means watch all keys
   */
  key: string;
  fn: Function;
};

let commandStagingStore: KeyCommand[] = [];
const clearCommandStagingStore = () => (commandStagingStore = []);

let commandsStore: KeyCommand[] = [];
const clearCommandStore = () => (commandsStore = []);

const runningKeyCammands: Record<string, WatchStopHandle> = {};

const useKeyStore = defineStore("key", () => {
  const KEYS = useMagicKeys();
  const keys = computed(() => Array.from(KEYS.current));

  function defineCommandKey(key: string) {
    return key[0] === "_" ? keys : KEYS[key];
  }

  const addKeyCommand = (newKeyCommand: KeyCommand) => {
    commandsStore.push(newKeyCommand);
    runningKeyCammands[newKeyCommand.key] = watch(defineCommandKey(newKeyCommand.key), newKeyCommand.fn.bind(this));
  };

  const addKeyCommands = (newKeyCommands: KeyCommand[]) => {
    forEach(newKeyCommands, (newKeyCommand) => addKeyCommand(newKeyCommand));
  };

  const stopRunningAllKeyCommands = () => {
    forEach(runningKeyCammands, (stopRunningKeyCammand) => stopRunningKeyCammand());
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
        addKeyCommands(commandStagingStore);
        clearCommandStagingStore();
      }
    },
  });

  return {
    addKeyCommand,
    addKeyCommands,
    freeze,
  };
});

export { useKeyStore };
