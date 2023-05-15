interface I18N {
  workshop: Dictionary<string> | {
    standard: {
      title: string
      description: string
      more: string
    }
  }
  modules: {
    i18n: string
    theme: string
    screen: string
    modules: string
  }
}
