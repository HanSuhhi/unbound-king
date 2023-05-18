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
    }
    screen: {
      title: string
    }
    modules: {
      title: string,
    }
    close: stirng
  }
  dialog: {
    global: {
      close: string
      confirm: string
    }
  }
}
