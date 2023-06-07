import { defineLang } from "../lang.model";

const enUsModel = {
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
      title: "Theme"
    },
    screen: {
      title: "Full Screen"
    },
    modules: {
      title: "System Modules"
    },
    close: "Close Modules"
  },
  dialog: {
    global: {
      close: "close dialog",
      confirm: "confirm"
    }
  },
  auth: {
    title: "Login to your Account",
    emailPlaceholder: "Email Address",
    verifyCodePlaceholder: "Email Code",
    getVerifyCode: "Get Email Code",
    loginTitle: "Login to Your Account",
    loginTitleSuffix: "nothing taboo",
    subtitle: "Your peeps are hanging on you coming back."
  }
};

export default defineLang(enUsModel, "English");

export type I18N = typeof enUsModel;
