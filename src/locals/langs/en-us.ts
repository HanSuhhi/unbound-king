import { defineLang } from "../lang.model";

export default defineLang({
  hotkey: "e",
  workshop: {
    standard: {
      title: "Standard Package",
      description: "This package is the game base package, containing the basic content of the game itself and all related systems. Loaded by default, irremovable. ",
      more: "Learn more..."
    }
  },
  modules: {
    i18n: "Language",
    theme: {
      title: "Theme",
      toggle: "toggle theme"
    },
    screen: {
      title: "Is Full Screen",
      toggle: "toggle full screen"
    },
    modules: {
      title: "System Modules",
      close: "Close Modules"
    }
  },
  dialog: {
    global: {
      close: "close dialog",
      confirm: "confirm"
    }
  }
}, "English");
