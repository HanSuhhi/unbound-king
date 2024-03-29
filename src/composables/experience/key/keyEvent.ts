import { isArray, isString } from "lodash";
import { useHotkeys } from "@/composables/experience/key/hotkey";

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
  return {
    ...keyEventWithoutFn,
    fn
  };
}

export function renderTextKeyEvent(key: KeyEventWithoutFn | KeyEventWithoutFn["key"]): string {
  const { translator } = useHotkeys();

  if (isArray(key)) return key.map(_key => translator(_key)).join(" + ");
  if (isString(key)) return translator(key)!;

  return renderTextKeyEvent(key.key);
}

export function definePressed(fn: () => void) {
  return (isPressed: boolean) => {
    if (isPressed) return;
    fn();
  };
}

export function defineMultiplePressed(keys: string[]) {
  return (fn: () => void) => {
    return (userCommands: string[]) => {
      if (userCommands.length !== keys.length) return;
      const notInControl = userCommands.reduce((prev, curr) => {
        if (keys.includes(curr)) return prev - 1;
        return prev;
      }, keys.length);
      if (notInControl) return;
      fn();
    };
  };
}

export function defineKeyEvent({ key }: KeyEventWithoutFn) {
  return (fn: () => void) => {
    if (isString(key)) return definePressed(fn);
    return defineMultiplePressed(key)(fn);
  };
}
