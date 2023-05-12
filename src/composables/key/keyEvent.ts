export function runKeyEvent(keyEvent?: KeyEvent) {
  if (!keyEvent) return;
  return Reflect.apply(keyEvent.fn, null, [false]);
}
