type KeyEvent = {
  key: string | string[];
  translator: Translator;
  fn: (isPressed) => void | Promise<void>;
}

type KeyEventWithoutFn = {
  key: string | string[];
  translator: Translator;
}