import { isArray, isString } from "lodash-es";

export function runKeyEvent(keyEvent?: KeyEvent) {
  if (!keyEvent) return;
  return Reflect.apply(keyEvent.fn, null, [false]);
}

export function defineKeyEventWithoutFn(key: KeyEvent["key"]) {
  return (translator: KeyEvent["translator"]): KeyEventWithoutFn => ({
    key,
    translator
  });
}

export function mountFnToKeyEventWithoutFn(keyEventWithoutFn: KeyEventWithoutFn, fn: KeyEvent["fn"]): KeyEvent {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...keyEventWithoutFn,
    fn
  };
}

export function renderTextKeyEvent(key: KeyEventWithoutFn | KeyEventWithoutFn["key"]): string {
  if (isArray(key)) return key.join(" - ");
  if (isString(key)) return key;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return renderTextKeyEvent(key.key);
}
