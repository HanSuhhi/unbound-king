export function defineLang(message: I18N, title: string) {
  Reflect.setPrototypeOf(message, { title });
  return message;
}

export const i18nLangModel: I18N = {
  workshop: {
    standard: {
      title: "workshop.standard.title",
      description: "workshop.standard.description",
      more: "workshop.standard.more"
    }
  },
  modules: {
    i18n: "modules.i18n",
    theme: "modules.theme",
    screen: "modules.screen",
    modules: "modules.modules"
  }
};
