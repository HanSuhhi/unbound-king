type KeyEvent = {
  key: string | string[];
  translator: string;
  fn: (isPressed) => void | Promise<void>;
  mount?: () => any;
}

type KeyEventWithoutFn = {
  key: string | string[];
  translator: string;
  mount?: () => any;
}