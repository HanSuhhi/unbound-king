export function defineLang(message: I18N, title: string) {
  Reflect.setPrototypeOf(message, { title });
  return message;
}

export const i18nLangModel: Omit<I18N, "hotkey"> = {
  workshop: {
    standard: {
      title: "workshop.standard.title",
      description: "workshop.standard.description",
      more: "workshop.standard.more"
    }
  },
  modules: {
    i18n: "modules.i18n",
    theme: {
      title: "modules.theme.title",
      toggle: "modules.theme.toggle"
    },
    screen: {
      title: "modules.screen.title",
      toggle: "modules.screen.toggle"
    },
    modules: {
      title: "modules.modules.title",
      close: "modules.modules.close"
    }
  },
  dialog: {
    global: {
      close: "dialog.global.close",
      confirm: "dialog.global.confirm"
    }
  }
};
