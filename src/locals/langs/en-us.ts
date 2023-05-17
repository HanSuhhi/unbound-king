import { defineLang } from "../lang.model";

export default defineLang({
  workshop: {
    standard: {
      title: "Standard Package",
      description: "This package is the game base package, containing the basic content of the game itself and all related systems. Loaded by default, irremovable. ",
      more: "Learn more..."
    }
  },
  modules: {
    i18n: "Language",
    theme: "Theme",
    screen: "Is Full Screen",
    modules: "System Modules",
    close_modules: "Close Modules"
  }
}, "English");
