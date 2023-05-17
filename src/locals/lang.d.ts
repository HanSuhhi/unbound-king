interface I18N {
  hotkey: string
  workshop: Dictionary<string> | {
    standard: {
      title: string
      description: string
      more: string
    }
  }
  modules: {
    i18n: string
    theme: {
      title: string
      toggle: stirng
    }
    screen: {
      title: string
      toggle: string
    }
    modules: {
      title: string,
      close: stirng
    }
  }
  dialog: {
    global: {
      close: string
      confirm: string
    }
  }
}
