type KeyEvent = {
  key: string | string[];
  translator: Translator;
  fn: (isPressed) => void | Promise<void>;
  mount?: () => any;
}

type KeyEventWithoutFn = {
  key: string | string[];
  translator: Translator;
  mount?: () => any;
}